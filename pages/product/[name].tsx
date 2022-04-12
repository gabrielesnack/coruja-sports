import { StarIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Select,
  Button,
} from '@chakra-ui/react'
import { NextPage } from 'next'
// import { useRouter } from 'next/router'
import Footer from '../../modules/commons/components/footer'
import Header from '../../modules/commons/components/header'
import { Layout } from '../../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../../modules/commons/config/constants'

const ProductDetail: NextPage = () => {
  // const router = useRouter()
  // const { name } = router.query

  return (
    <Layout
      header={<Header />}
      footer={<Footer />}
      boxProps={{ bgColor: 'gray.50' }}
    >
      <Container {...CONTAINER_PROPS} h="100%" mb="0" pt="4rem">
        <Flex w="100%" justifyContent="space-between">
          <Box
            p="2"
            bgColor="whiteAlpha.900"
            borderWidth="1px"
            borderRadius="lg"
          >
            <Box borderWidth="1px" maxW="560px" mb="2">
              <Image src="/camiseta.jpeg" />
            </Box>
            <Flex gap="1">
              <Box
                borderWidth="1px"
                borderRadius="md"
                w="64px"
                h="64px"
                cursor="pointer"
              >
                <Image src="/camiseta.jpeg" borderRadius="md" />
              </Box>
              <Box
                borderWidth="1px"
                borderRadius="md"
                w="64px"
                h="64px"
                cursor="pointer"
              >
                <Image src="/camiseta.jpeg" borderRadius="md" />
              </Box>
              <Box
                borderWidth="1px"
                borderRadius="md"
                w="64px"
                h="64px"
                cursor="pointer"
              >
                <Image src="/camiseta.jpeg" borderRadius="md" />
              </Box>
              <Box
                borderWidth="1px"
                borderRadius="md"
                w="64px"
                h="64px"
                cursor="pointer"
              >
                <Image src="/camiseta.jpeg" borderRadius="md" />
              </Box>
            </Flex>
          </Box>

          <Box
            d="flex"
            flexDir="column"
            justifyContent="start"
            minW="450px"
            px="10"
            pt="4"
            pb="10"
            gap="4"
            borderWidth="1px"
            borderRadius="lg"
            bgColor="whiteAlpha.900"
          >
            <Box display="flex" mt="2" alignItems="center" alignSelf="flex-end">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < 4 ? 'teal.500' : 'gray.300'}
                    mr="1"
                    fontSize="md"
                  />
                ))}
            </Box>

            <Flex h="100%" flexDir="column" justifyContent="space-between">
              <Flex flexDir="column" gap="4">
                <Heading fontSize="2xl">Camiseta do Santos</Heading>

                <Text fontSize="3xl" fontWeight="light">
                  R$ 149,99
                </Text>

                <Box
                  d="flex"
                  alignItems="center"
                  gap="4"
                  color="blackAlpha.700"
                >
                  <Text fontSize="lg">Tamanho: </Text>

                  <Select size="md">
                    <Box as="option">PP</Box>
                    <Box as="option" defaultChecked>
                      P
                    </Box>
                    <Box as="option">M</Box>
                    <Box as="option">G</Box>
                    <Box as="option">GG</Box>
                  </Select>
                </Box>

                <Box
                  d="flex"
                  alignItems="center"
                  gap="4"
                  color="blackAlpha.700"
                >
                  <Text fontSize="lg">Cor: </Text>

                  <Select size="md">
                    <Box as="option">Branca</Box>
                    <Box as="option" defaultChecked>
                      P
                    </Box>
                    <Box as="option">Preta</Box>
                    <Box as="option">Azul</Box>
                    <Box as="option">Rosa</Box>
                  </Select>
                </Box>

                <Box
                  d="flex"
                  alignItems="center"
                  gap="4"
                  color="blackAlpha.700"
                >
                  <Text fontSize="lg">Quantidade: </Text>

                  <Select size="md">
                    <Box as="option" defaultChecked>
                      1
                    </Box>
                    <Box as="option">2</Box>
                    <Box as="option">3</Box>
                    <Box as="option">4</Box>
                    <Box as="option">5</Box>
                  </Select>
                </Box>
              </Flex>

              <Box
                d="flex"
                flexDir="column"
                alignSelf="flex-end"
                w="100%"
                gap="4"
              >
                <Button colorScheme="primary">Comprar</Button>
                <Button colorScheme="secondary" variant="outline">
                  Adicionar ao carrinho
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export default ProductDetail