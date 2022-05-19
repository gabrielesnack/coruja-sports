import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Input,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import ClientOnly from '../../../modules/commons/components/clientOnly'
import { Field } from '../../../modules/commons/components/field'
import Footer from '../../../modules/commons/components/footer'
import Header from '../../../modules/commons/components/header'
import { Layout } from '../../../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'

const ManageCollaborators: NextPage = () => {
  const router = useRouter()

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Container {...CONTAINER_PROPS} py="10">
        <Flex justifyContent="space-between" alignItems="center" mb="10">
          <Heading fontSize="2xl">Bem vindo a sessão de colaboradores</Heading>

          <Flex gap="4">
            <Input placeholder="E-mail" size="sm" bgColor="whiteAlpha.900" />
            <Button
              colorScheme="primary"
              size="sm"
              onClick={() => router.push('suppliers/create')}
              px="10"
            >
              Novo Colaborador
            </Button>
          </Flex>
        </Flex>

        <Box bgColor="whiteAlpha.900" boxShadow="xl" p="1" borderWidth="1px">
          <TableContainer>
            <Table size="sm" variant="striped" colorScheme="blackAlpha">
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>E-mail</Th>
                  <Th>Permissão</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Gabriel Jorge</Td>
                  <Td>gabriel.jorge@gmail.com</Td>
                  <Td maxWidth="72px">
                    <ClientOnly>
                      <Select bgColor="whiteAlpha.900" size="sm">
                        <option>Admin</option>
                        <option>Funcionário</option>
                        <option>Usuário</option>
                      </Select>
                    </ClientOnly>
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

export default ManageCollaborators
