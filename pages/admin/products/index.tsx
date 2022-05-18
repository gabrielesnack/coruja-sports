import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import { ProductDetailModal } from '../../../modules/admin/components/ProductDetailModal'
import Footer from '../../../modules/commons/components/footer'
import Header from '../../../modules/commons/components/header'
import { Layout } from '../../../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'

const ManageProduct: NextPage = () => {
  const router = useRouter()

  return (
    <Layout header={<Header></Header>} footer={<Footer></Footer>}>
      <Container {...CONTAINER_PROPS} mb="12">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading my="12" fontSize="xl">
            Produtos Cadastrados
          </Heading>

          <Flex gap="4">
            <Button
              colorScheme="primary"
              size="sm"
              onClick={() => router.push('products/categories')}
            >
              Nova Categoria
            </Button>
            <Button
              colorScheme="primary"
              size="sm"
              onClick={() => router.push('products/create')}
            >
              Novo Produto
            </Button>
          </Flex>
        </Flex>

        <Box bgColor="whiteAlpha.900" boxShadow="xl" p="1" borderWidth="1px">
          <TableContainer>
            <Table size="sm" variant="striped" colorScheme="blackAlpha">
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Fornecedor</Th>
                  <Th>Preço</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Camiseta do Santos Retrô</Td>
                  <Td>AliExpress</Td>
                  <Td>R$ 170,00</Td>
                  <Td>
                    <ProductDetailModal />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Camiseta do Santos Retrô</Td>
                  <Td>AliExpress</Td>
                  <Td>R$ 170,00</Td>
                  <Td>
                    <ProductDetailModal />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Camiseta do Santos Retrô</Td>
                  <Td>AliExpress</Td>
                  <Td>R$ 170,00</Td>
                  <Td>
                    <ProductDetailModal />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Layout>
  )
}

export default ManageProduct
