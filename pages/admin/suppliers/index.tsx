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
import { cnpj } from 'cpf-cnpj-validator'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import { useGetSupplier } from '../../../modules/admin/hooks/useSupplier'
import Footer from '../../../modules/commons/components/Footer'
import Header from '../../../modules/commons/components/Header'
import { Layout } from '../../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'
import { TrashIcon } from '../../../modules/commons/icons'

const ManageSuppliers: NextPage = () => {
  const router = useRouter()

  const { suppliers, isLoading } = useGetSupplier()

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Container {...CONTAINER_PROPS} py="10">
        <Flex justifyContent="space-between" alignItems="center" mb="10">
          <Heading fontSize="2xl">Bem vindo a sessão de fornecedores</Heading>

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
          {isLoading && (
            <TableContainer>
              <Table size="sm" variant="striped" colorScheme="blackAlpha">
                <Thead>
                  <Tr>
                    <Th>Código API</Th>
                    <Th>Nome</Th>
                    <Th>CNPJ</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {suppliers?.data?.map((item) => (
                    <Tr key={item.id}>
                      <Td>{item.apiCode}</Td>
                      <Td>{item.name}</Td>
                      <Td>{cnpj.format(item.cnpj)}</Td>
                      <Td>
                        <Flex gap="4">
                          <IconButton
                            size="sm"
                            variant="ghost"
                            color="info"
                            aria-label="editar"
                            icon={<EditIcon />}
                          />
                          <IconButton
                            size="sm"
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
          )}
        </Box>
      </Container>
    </Layout>
  )
}

export default ManageSuppliers
