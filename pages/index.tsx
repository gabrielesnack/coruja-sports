import { Box, Flex, Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Footer from '../modules/commons/components/Footer'
import Header from '../modules/commons/components/Header'
import { Layout } from '../modules/commons/components/Layout'
import ListProducts from '../modules/dashboard/components/ListProducts'

const Home: NextPage = () => {
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

        <ListProducts title="Conheça os destaques da nossa loja" />

        <Flex bgColor="blackAlpha.900" pt="12" mb="12">
          <ListProducts title="Conheça nossos lançamentos" inverseColor />
        </Flex>

        <ListProducts title="Produtos Relacionados" />
      </Flex>
    </Layout>
  )
}

export default Home
