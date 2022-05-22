import { Container, Flex, Heading, Show, Text } from '@chakra-ui/react'
import { GetStaticPropsContext, NextPage } from 'next'
import Footer from '../../modules/commons/components/footer'
import Header from '../../modules/commons/components/header'
import { Layout } from '../../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../../modules/commons/config/constants'
import { fetchAPI } from '../../modules/commons/helpers/fetchApi'
import { hasItemArray } from '../../modules/commons/helpers/hasItemArray'
import { CategoriesType, ProductType } from '../../modules/commons/types'
import { SearchAside } from '../../modules/shopping/components/SearchAside'
import { SearchFilter } from '../../modules/shopping/components/searchFilter/component'
import { SearchList } from '../../modules/shopping/components/SearchList'
import { SearchSorting } from '../../modules/shopping/components/SearchSorting'

type SearchProps = {
  categories?: CategoriesType[]
  products?: ProductType[]
  product?: string
}

type PageParams = {
  product: string
}

export async function getStaticPaths() {
  const paths = ['/search/santos'] // pre-render paths, one day we can bring the main searches

  return { paths, fallback: true } // on-demand if the path doesn't exist.
}

export async function getStaticProps(ctx: GetStaticPropsContext<PageParams>) {
  let products = null
  let categories = null
  const term = ctx.params?.product || ''

  try {
    const resProd = await fetchAPI.get<ProductType[]>(`products?search=${term}`)
    const resCat = await fetchAPI.get<ProductType[]>(`categories`)

    if (hasItemArray(resProd.data)) products = resProd.data
    if (hasItemArray(resCat.data)) categories = resCat.data
  } catch (err: ReturnType<Error>) {
    throw err
  }

  return {
    props: {
      categories,
      products,
      product: term,
      errorCode: 500,
    },
    revalidate: 60,
  }
}

const SearchProduct: NextPage<SearchProps> = ({
  categories,
  products,
  product,
}) => {
  const hasProducts = !!products

  const hasResultMessage =
    hasProducts &&
    (product ? `Resultados encontrados para ` : 'Resultados encontrados')

  const noResultMessage =
    !hasProducts && 'Nenhum resultado foi encontrado para a sua pesquisa.'

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Show below="md">
        <SearchFilter />
      </Show>
      <Container
        {...CONTAINER_PROPS}
        pt={['5rem', null, null, 'initial']}
        pb="12"
      >
        <Flex
          flexDirection={['column', null, null, 'row']}
          justifyContent="space-between"
          alignItems={[null, null, null, 'center']}
          my="12"
        >
          <Heading fontSize="2xl" fontWeight="light">
            {hasResultMessage}
            {hasProducts && (
              <Text d="inline-block" fontWeight="bold">
                {product}
              </Text>
            )}
            {noResultMessage}
          </Heading>

          {hasProducts && <SearchSorting />}
        </Flex>

        <Flex w="100%" gap="12">
          {categories && <SearchAside categories={categories} />}

          {products && <SearchList products={products} />}
        </Flex>
      </Container>
    </Layout>
  )
}

export default SearchProduct
