import {
  Box,
  Container,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  Select,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react'
import { NextPage } from 'next//types'
import ClientOnly from '../modules/commons/components/clientOnly'
import Footer from '../modules/commons/components/footer'
import Header from '../modules/commons/components/header'
import { Layout } from '../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../modules/commons/config/constants'
import { toCurrencyBRL } from '../modules/commons/helpers/currency'
import {
  CheckoutFactory,
  MercadoPagoSDK,
} from '../modules/commons/thirdparty/MercadoPago'
import { ModalAddress } from '../modules/shopping/components/modalAddress/component'
import { useCart } from '../modules/shopping/hooks/useCart'

const Cart: NextPage = () => {
  const openCheckout = () => {
    const checkout = new CheckoutFactory()
    checkout.create()
    checkout.open()
  }

  const { items, update } = useCart()

  const maxOptions = new Array(100).fill(1)

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <MercadoPagoSDK />

      <Container {...CONTAINER_PROPS}>
        <Flex flexDir="column" gap="8" py="10" mb="10">
          <Heading d={['none', null, null, 'block']} fontWeight="semibold">
            Meu Carrinho
          </Heading>

          <Flex flexDir={['column-reverse', null, null, 'row']} gap="6">
            <TableContainer
              w={['100%', null, null, '70%']}
              bgColor="white"
              borderWidth="1px"
            >
              <Heading
                d={['block', null, null, 'none']}
                my="10"
                textAlign="center"
                fontWeight="semibold"
              >
                Meu Carrinho
              </Heading>

              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th>Produto</Th>
                    <Th>Quantidade</Th>
                    <Th>Preço</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items.map(({ item, total }) => (
                    <Tr key={`item-${item.name}`}>
                      <Td>
                        <Box w="64px" h="64px">
                          <Image src="/camiseta.jpeg" alt="camiseta" />
                        </Box>
                      </Td>
                      <Td>{item.name}</Td>
                      <Td>
                        <Select
                          variant="flushed"
                          defaultValue={total}
                          onChange={(e) =>
                            update(item.id, Number(e.target.value))
                          }
                        >
                          {maxOptions.map((e, idx) => {
                            return (
                              <option
                                key={`quantidade-${idx + 1}`}
                                value={idx + 1}
                                defaultChecked
                              >
                                {idx + 1} Unidade{idx > 1 ? 's' : ''}
                              </option>
                            )
                          })}
                        </Select>
                      </Td>
                      <Td>{toCurrencyBRL(item.price)}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>

            <Box
              d="flex"
              flexDir="column"
              w={['100%', null, null, '30%']}
              h="fit-content"
              borderWidth="1px"
              p="8"
              gap="4"
              bgColor={'whiteAlpha.900'}
            >
              <Text
                alignSelf="center"
                fontSize="2xl"
                fontWeight="bold"
                color="gray.600"
              >
                Resumo
              </Text>

              <Text fontSize="medium" fontWeight="semibold" color="gray.500">
                {items.length} produto{items.length > 1 ? 's' : ''}
              </Text>

              <Text fontSize="2xl" fontWeight="semibold" color="gray.600">
                Total R$ 1039,50
              </Text>

              <Box d="flex" flexDir="column" gap="2" mb="6">
                <Text
                  fontSize="medium"
                  fontWeight="semibold"
                  color="gray.500"
                  whiteSpace="nowrap"
                >
                  Endereço de Entrega:
                </Text>

                <ClientOnly>
                  <ModalAddress />
                </ClientOnly>
              </Box>

              <Button
                px="10"
                colorScheme="primary"
                onClick={() => openCheckout()}
              >
                Finalizar Compra
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Cart
