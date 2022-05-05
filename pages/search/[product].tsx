import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Select,
  Show,
  Text,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Footer from '../../modules/commons/components/footer'
import Header from '../../modules/commons/components/header'
import { Layout } from '../../modules/commons/components/layout'
import ProductCard from '../../modules/commons/components/productCard'
import { CONTAINER_PROPS } from '../../modules/commons/config/constants'
import { SearchFilter } from '../../modules/shopping/components/searchFilter/component'

const SearchProduct: NextPage = () => {
  const router = useRouter()
  const { product } = router.query

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Show below="md">
        <SearchFilter />
      </Show>
      <Container
        {...CONTAINER_PROPS}
        pb="12"
        py={['5rem', null, null, 'initial']}
      >
        <Flex
          flexDirection={['column', null, null, 'row']}
          justifyContent="space-between"
          alignItems={[null, null, null, 'center']}
          my="12"
        >
          <Heading fontSize="2xl" fontWeight="light">
            Você buscou por{' '}
            <Text d="inline-block" fontWeight="bold">
              {product}
            </Text>
          </Heading>

          <Show above="md">
            <Box d="flex" alignItems="center">
              <Text fontSize="lg" fontWeight="bold" whiteSpace="nowrap" mr="4">
                Ordernar por:
              </Text>
              <Select fontSize="xl" variant="unstyled">
                <Box as="option" defaultChecked>
                  mais populares
                </Box>
                <Box as="option">menor preço</Box>
                <Box as="option">maior preço</Box>
              </Select>
            </Box>
          </Show>
        </Flex>

        <Flex w="100%" gap="12">
          <Box d={['none', null, null, 'initial']} mr="12">
            <Heading fontSize="lg" mb="6">
              Categoria
            </Heading>

            {[
              'Brasileirão',
              'Serie A',
              'La Liga',
              'Ligue 1',
              'Premier league',
            ].map((item, idx) => (
              <Text key={`categoria-${idx}`}>{item}</Text>
            ))}

            <Heading fontSize="lg" my="6">
              Gênero
            </Heading>

            {['Menino', 'Menina', 'Homem', 'Mulher', 'Bebê'].map(
              (item, idx) => (
                <Text key={`categoria-${idx}`}>{item}</Text>
              )
            )}

            <Heading my="6" fontSize="lg">
              Tamanhos
            </Heading>

            {['P', 'PP', 'M', 'G', 'GG'].map((item, idx) => (
              <Text key={`categoria-${idx}`}>{item}</Text>
            ))}
          </Box>

          <Grid
            gridTemplateColumns={['1fr', null, '1fr 1fr', '1fr 1fr 1fr']}
            gap="8"
          >
            {Array(12)
              .fill(1)
              .map((_, idx) => (
                <GridItem key={`product-${idx}`}>
                  <ProductCard />
                </GridItem>
              ))}
          </Grid>
        </Flex>
      </Container>
    </Layout>
  )
}

export default SearchProduct
