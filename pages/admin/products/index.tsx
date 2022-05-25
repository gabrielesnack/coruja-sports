import { EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
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
import Footer from '../../../modules/commons/components/Footer'
import Header from '../../../modules/commons/components/Header'
import { Layout } from '../../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'
import { toCurrencyBRL } from '../../../modules/commons/helpers/currency'
import { useProduct } from '../../../modules/commons/hooks/useProduct'
import { TrashIcon } from '../../../modules/commons/icons'

const ManageProduct: NextPage = () => {
  const router = useRouter()

  const { products } = useProduct()

  return (
    <Layout header={<Header></Header>} footer={<Footer></Footer>}>
      <Container {...CONTAINER_PROPS} mb="12">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading my="12" fontSize="2xl">
            Bem vindo a sessão de produtos
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
                {products?.data.map((product) => (
                  <Tr>
                    <Td>{product.name}</Td>
                    <Td>{product.provider}</Td>
                    <Td>{toCurrencyBRL(product.price)}</Td>
                    <Td>
                      <Flex>
                        <IconButton
                          variant="ghost"
                          color="info"
                          aria-label="editar"
                          icon={<EditIcon />}
                        />
                        <ProductDetailModal id={product.id} />
                        <IconButton
                          variant="ghost"
                          color="danger"
                          aria-label="excluir"
                          icon={<TrashIcon />}
                        />
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Layout>
  )
}

export default ManageProduct
