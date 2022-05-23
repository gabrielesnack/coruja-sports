import { Box, Flex, Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Footer from '../modules/commons/components/Footer'
import Header from '../modules/commons/components/Header'
import { Layout } from '../modules/commons/components/Layout'
import {
  fetchAPI,
  FetchResponseType,
} from '../modules/commons/helpers/fetchApi'
import { ProductType } from '../modules/commons/types'
import ListProducts from '../modules/dashboard/components/ListProducts'

type PageParams = {
  highlightedProducts: FetchResponseType<ProductType[]>
}

export async function getStaticProps() {
  let highlightedProducts = null

  try {
    highlightedProducts = await fetchAPI.get<ProductType[]>(
      `/products/highlighted`
    )
  } catch (err: ReturnType<Error>) {
    throw err
  }

  return {
    props: {
      highlightedProducts,
    },
    revalidate: 60,
  }
}

const Home: NextPage<PageParams> = ({ highlightedProducts }) => {
  // console.log(process.env.NEXT_PUBLIC_API_URL)
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Flex w="100%" flexDirection="column">
        <Box w="100%" mb="12">
          <Image
            alt="Banner"
            src="banner.png"
            w="100%"
            h={['50vh', null, null, 'auto']}
            objectFit={['cover', null, null, 'fill']}
          />
        </Box>

        <ListProducts
          title="Conheça os destaques da nossa loja"
          products={highlightedProducts.data}
        />

        <Flex bgColor="blackAlpha.900" pt="12" mb="12">
          <ListProducts
            title="Conheça nossos lançamentos"
            inverseColor
            products={highlightedProducts.data}
          />
        </Flex>

        <ListProducts
          title="Produtos Relacionados"
          products={highlightedProducts.data}
        />
      </Flex>
    </Layout>
  )
}

export default Home
