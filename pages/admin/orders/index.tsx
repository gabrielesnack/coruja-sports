import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
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
import { EditOrderModal } from '../../../modules/admin/components/EditOrderModal'
import Footer from '../../../modules/commons/components/footer'
import Header from '../../../modules/commons/components/header'
import { Layout } from '../../../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'
import { EditIcon, PencilIcon, TrashIcon } from '../../../modules/commons/icons'

const ManageOrders: NextPage = () => {
  const router = useRouter()

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Container {...CONTAINER_PROPS} py="10">
        <Flex justifyContent="space-between" alignItems="center" mb="10">
          <Heading fontSize="2xl">Bem vindo a sessão de pedidos</Heading>

          <Flex gap="4">
            <Input bgColor="whiteAlpha.900" placeholder="Buscar Pedido" />
          </Flex>
        </Flex>

        <Box bgColor="whiteAlpha.900" boxShadow="xl" p="1" borderWidth="1px">
          <TableContainer>
            <Table size="sm" variant="striped" colorScheme="blackAlpha">
              <Thead>
                <Tr>
                  <Th>Código</Th>
                  <Th>Cliente</Th>
                  <Th>Status</Th>
                  <Th>Valor</Th>
                  <Th>Data</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>#94817283</Td>
                  <Td>Gabriel Jorge</Td>
                  <Td>
                    <Badge variant="solid" colorScheme="green" size="sm">
                      Enviado
                    </Badge>
                  </Td>
                  <Td>R$ 317,00</Td>
                  <Td>18/05/2022</Td>
                  <Td>
                    <Flex gap="4">
                      <EditOrderModal />
                    </Flex>
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

export default ManageOrders
