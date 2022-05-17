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
  InputElementProps,
  SelectFieldProps,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import React, { useState } from 'react'
// import { useRouter } from 'next/router'
import Footer from '../../modules/commons/components/footer'
import Header from '../../modules/commons/components/header'
import { Layout } from '../../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../../modules/commons/config/constants'
import { toCurrencyBRL } from '../../modules/commons/helpers/currency'
import { ProductType } from '../../modules/commons/types'
import { ProductPreview } from '../../modules/shopping/components/productPreview/component'
import { useCart } from '../../modules/shopping/hooks/useCart'

const ProductDetail: NextPage = () => {
  const { add } = useCart()
  const [quantity, setQuantity] = useState<number>(1)

  const product: ProductType = {
    id: 1,
    name: 'camiseta do santos',
    description: '',
    images: ['/camiseta.jpeg'],
    price: 127.54,
    variations: [{ Cor: ['Branco', 'Preto'], Tamanho: ['P', 'M', 'G'] }],
  }
  // const router = useRouter()
  // const { name } = router.query

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Container {...CONTAINER_PROPS} h="100%" mb="12" pt="4rem">
        <Flex
          w="100%"
          flexDir={['column', null, null, 'row']}
          justifyContent={'space-between'}
          alignItems={['center', null, null, 'initial']}
          gap="4"
        >
          <ProductPreview></ProductPreview>

          <Box
            d="flex"
            flexDir="column"
            justifyContent="start"
            minW={['100%', null, '450px']}
            maxW={[null, null, '560px', 'auto']}
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

            <Flex
              h="100%"
              flexDir="column"
              justifyContent="space-between"
              gap="10"
            >
              <Flex flexDir="column" gap="4">
                <Heading fontSize="2xl">{product.name}</Heading>

                <Text fontSize="3xl" fontWeight="light">
                  {toCurrencyBRL(product.price)}
                </Text>

                <Box
                  borderWidth="1px"
                  borderRadius="md"
                  boxShadow="0 .15rem 2rem 0 rgb(136 152 170 / 15%)"
                >
                  <Image
                    borderRadius="md"
                    src={product.images[0]}
                    alt="camiseta"
                    d={[null, null, null, 'none']}
                  />
                </Box>

                <Box
                  d="flex"
                  alignItems="center"
                  gap="4"
                  color="blackAlpha.700"
                >
                  <Text fontSize="lg">Tamanho: </Text>

                  <Select size="md">
                    {product.variations[0].Tamanho.map((size) => (
                      <Box as="option" key={`tamanho-${size}`}>
                        {size}
                      </Box>
                    ))}
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
                    {product.variations[0].Cor.map((cor) => (
                      <Box as="option" key={`cor-${cor}`}>
                        {cor}
                      </Box>
                    ))}
                  </Select>
                </Box>

                <Box
                  d="flex"
                  alignItems="center"
                  gap="4"
                  color="blackAlpha.700"
                >
                  <Text fontSize="lg">Quantidade: </Text>

                  <Select
                    size="md"
                    onChange={(e) => setQuantity(Number(e.target?.value))}
                  >
                    <Box as="option" defaultChecked value={1}>
                      1
                    </Box>
                    <Box as="option" value={2}>
                      2
                    </Box>
                    <Box as="option" value={3}>
                      3
                    </Box>
                    <Box as="option" value={4}>
                      4
                    </Box>
                    <Box as="option" value={5}>
                      5
                    </Box>
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
                <Button
                  colorScheme="secondary"
                  variant="outline"
                  onClick={() => add(product, quantity)}
                >
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
