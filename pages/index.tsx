import { Box, Container, Flex, Grid, Heading, Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Footer from '../modules/commons/components/footer'
import Header from '../modules/commons/components/header'
import { Layout } from '../modules/commons/components/layout'
import ProductCard from '../modules/commons/components/productCard'
import { CONTAINER_PROPS } from '../modules/commons/config/constants'

const Home: NextPage = () => {
  return (
    <Layout header={<Header />}>
      <Flex w="100%" flexDirection="column">
        {/* <Heading size="xl">Coruja Sports</Heading> */}

        <Box w="100%" mb="12">
          <Image
            src="banner.png"
            w="100%"
            h={['50vh', null, null, 'auto']}
            objectFit={['cover', null, null, 'fill']}
          />
        </Box>

        <Container {...CONTAINER_PROPS} mb="12">
          <Heading
            size="xl"
            mb="8"
            mt="6"
            textAlign={['center', null, null, 'left']}
          >
            Conheça os destaques da nossa loja
          </Heading>

          <Grid
            width="100%"
            gap="4"
            templateColumns={['1fr', null, '1fr 1fr', '1fr 1fr 1fr']}
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </Container>

        <Flex bgColor="blackAlpha.900" pb="12">
          <Container {...CONTAINER_PROPS}>
            <Heading
              size="xl"
              mt="6"
              mb="8"
              color="whiteAlpha.900"
              textAlign={['center', null, null, 'left']}
            >
              Conheça nossos lançamentos
            </Heading>

            <Grid
              width="100%"
              gap="4"
              templateColumns={['1fr', null, '1fr 1fr', '1fr 1fr 1fr']}
            >
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Grid>
          </Container>
        </Flex>

        <Container {...CONTAINER_PROPS} mb="12">
          <Heading
            size="xl"
            mb="8"
            mt="6"
            textAlign={['center', null, null, 'left']}
          >
            Produtos Relacionados
          </Heading>

          <Grid
            width="100%"
            gap="4"
            templateColumns={['1fr', null, '1fr 1fr', '1fr 1fr 1fr']}
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </Container>

        <Footer />
      </Flex>
    </Layout>
  )
}

export default Home
