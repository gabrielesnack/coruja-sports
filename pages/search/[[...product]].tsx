import { Container, Flex, Heading, Show, Text } from '@chakra-ui/react'
import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  NextPage,
} from 'next'
import Footer from '../../modules/commons/components/Footer'
import Header from '../../modules/commons/components/Header'
import { Layout } from '../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../modules/commons/config/constants'
import { fetchAPI } from '../../modules/commons/helpers/fetchApi'
import { hasItemArray } from '../../modules/commons/helpers/hasItemArray'
import {
  CategoriesType,
  ProductResponseType,
  SizeResponseType,
} from '../../modules/commons/types'
import { SearchAside } from '../../modules/shopping/components/SearchAside'
import { SearchFilter } from '../../modules/shopping/components/SearchFilter/'
import { SearchList } from '../../modules/shopping/components/SearchList'
import { SearchSorting } from '../../modules/shopping/components/SearchSorting'
import {
  SearchProvider,
  useSearchContext,
} from '../../modules/shopping/context/SearchContext'
import { useSearchProducts } from '../../modules/shopping/hooks/useSearchProducts'

type SearchProps = {
  categories?: CategoriesType[]
  sizes: SizeResponseType[]
  products?: ProductResponseType[]
  product?: string
}

type PageParams = {
  product: string
  categoriesIds?: string
  sizesIds?: string
}

export async function getServerSideProps(
  ctx: GetServerSidePropsContext<PageParams>
) {
  let products = null
  let categories = null
  let sizes = null

  const term = ctx.params?.product || ''
  const categoriesIds = ctx.query?.categoriesIds || ''
  const sizesIds = ctx.query?.sizesIds || ''

  try {
    const resProd = await fetchAPI.get<ProductResponseType[]>(
      `products?search=${term}&category_ids=${categoriesIds}&variation_ids=${sizesIds}`
    )
    const resCat = await fetchAPI.get<ProductResponseType[]>(`categories`)

    const resSizes = await fetchAPI.get<SizeResponseType[]>(
      `products/variations`
    )

    if (hasItemArray(resProd.data)) products = resProd.data
    if (hasItemArray(resCat.data)) categories = resCat.data
    if (hasItemArray(resSizes.data))
      sizes = resSizes.data.filter((e) => e.variation_type_id === 1)
  } catch (err: ReturnType<Error>) {
    throw err
  }

  return {
    props: {
      categories,
      sizes,
      products,
      product: term,
    },
  }
}

const SearchProduct: NextPage<SearchProps> = ({
  categories,
  sizes,
  products: loadProducts,
  product,
}) => {
  const { products: refreshProducts } = useSearchContext()
  const products = refreshProducts || loadProducts

  const hasProducts = !!products && products.length > 0

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
          <Heading fontSize="2xl" fontWeight="medium">
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

        <Flex w="100%">
          {categories && sizes && (
            <SearchAside categories={categories} sizes={sizes} />
          )}

          {products && <SearchList products={products} />}
        </Flex>
      </Container>
    </Layout>
  )
}

export default (props: SearchProps) => (
  <SearchProvider>
    <SearchProduct {...props} />
  </SearchProvider>
)
