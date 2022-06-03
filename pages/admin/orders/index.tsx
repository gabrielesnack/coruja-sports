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
import { Select } from 'chakra-react-select'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import { EditOrderModal } from '../../../modules/admin/components/EditOrderModal'
import ClientOnly from '../../../modules/commons/components/ClientOnly'
import Footer from '../../../modules/commons/components/Footer'
import Header from '../../../modules/commons/components/Header'
import { Layout } from '../../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'
import { EditIcon, PencilIcon, TrashIcon } from '../../../modules/commons/icons'

const ManageOrders: NextPage = () => {
  const router = useRouter()

  return (
    <ClientOnly>
      <Layout header={<Header />} footer={<Footer />}>
        <Container {...CONTAINER_PROPS} py="10">
          <Flex
            flexDir={['column', null, null, 'row']}
            gap={['6', null, null, '0']}
            justifyContent="space-between"
            alignItems="center"
            mb="10"
          >
            <Heading fontSize="2xl">Bem vindo a sessão de pedidos</Heading>

            <Flex
              flexDir={['column', null, null, 'row']}
              gap="2"
              w={['100%', null, null, 'auto']}
            >
              <Box d="flex" gap="2" w="100%">
                <Input
                  w="100%"
                  size="sm"
                  bgColor="whiteAlpha.900"
                  placeholder="Buscar Pedido"
                  rounded="0"
                />
                <Button px="6" size="sm" colorScheme="primary" rounded="0">
                  Buscar
                </Button>
              </Box>

              <Box minW="15rem" bgColor="whiteAlpha.900" rounded="lg" size="sm">
                <Select
                  size="sm"
                  placeholder="Filtrar"
                  options={[
                    { label: 'Todos', value: 'all' },
                    { label: 'Solicitação Cancelamento', value: 'undo' },
                    { label: 'Reembolsados', value: 'refund' },
                  ]}
                />
              </Box>
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
                        <IconButton
                          variant="ghost"
                          color="danger"
                          size="sm"
                          aria-label="cancelar"
                          icon={<TrashIcon />}
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
    </ClientOnly>
  )
}

export default ManageOrders
