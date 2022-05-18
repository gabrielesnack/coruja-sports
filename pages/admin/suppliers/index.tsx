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
import Footer from '../../../modules/commons/components/footer'
import Header from '../../../modules/commons/components/header'
import { Layout } from '../../../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'
import { PencilIcon, TrashIcon } from '../../../modules/commons/icons'

const ManageSuppliers: NextPage = () => {
  const router = useRouter()

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Container {...CONTAINER_PROPS} py="10">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading my="12" fontSize="xl">
            Bem-Vindo a sessão de fornecedores.
          </Heading>

          <Flex gap="4">
            <Button
              colorScheme="primary"
              size="sm"
              onClick={() => router.push('suppliers/create')}
            >
              Novo Fornecedor
            </Button>
          </Flex>
        </Flex>

        <Box bgColor="whiteAlpha.900" boxShadow="xl" p="1" borderWidth="1px">
          <TableContainer>
            <Table size="sm" variant="striped" colorScheme="blackAlpha">
              <Thead>
                <Tr>
                  <Th>Código API</Th>
                  <Th>Nome</Th>
                  <Th>CNPJ</Th>
                  <Th>E-mail</Th>
                  <Th>Telefone</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>#94817283</Td>
                  <Td>AliExpress</Td>
                  <Td>22.295.067/0001-33</Td>
                  <Td>-</Td>
                  <Td>-</Td>
                  <Td>
                    <Flex gap="4">
                      <IconButton
                        size="sm"
                        variant="ghost"
                        color="danger"
                        aria-label="excluir"
                        icon={<TrashIcon />}
                      />
                      <IconButton
                        size="sm"
                        variant="ghost"
                        color="info"
                        aria-label="editar"
                        icon={<PencilIcon />}
                      />
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

export default ManageSuppliers
