import { Box, Flex, Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Footer from '../modules/commons/components/Footer'
import Header from '../modules/commons/components/Header'
import { Layout } from '../modules/commons/components/Layout'
import {
  fetchAPI,
  FetchResponseType,
} from '../modules/commons/helpers/fetchApi'
import { ProductResponseType } from '../modules/commons/types'
import ListProducts from '../modules/dashboard/components/ListProducts'

type PageParams = {
  highlightedProducts: FetchResponseType<ProductResponseType[]>
  recentProducts: FetchResponseType<ProductResponseType[]>
}

export async function getStaticProps() {
  let highlightedProducts = null
  let recentProducts = null

  try {
    highlightedProducts = await fetchAPI.get<ProductResponseType[]>(
      `/products/highlighted`
    )
    recentProducts = await fetchAPI.get<ProductResponseType[]>(
      `/products/recents`
    )
  } catch (err: ReturnType<Error>) {
    throw err
  }

  return {
    props: {
      highlightedProducts,
      recentProducts,
    },
    revalidate: 60,
  }
}

const Home: NextPage<PageParams> = ({
  highlightedProducts,
  recentProducts,
}) => {
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
            products={recentProducts.data}
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
