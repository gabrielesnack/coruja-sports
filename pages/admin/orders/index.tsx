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
import { format } from 'date-fns'
import { NextPage } from 'next/types'
import { useRef } from 'react'
import { EditOrderModal } from '../../../modules/admin/components/EditOrderModal'
import { useCancelOrder } from '../../../modules/admin/hooks/useCancelOrder'
import { useOrders } from '../../../modules/admin/hooks/useOrders'
import ClientOnly from '../../../modules/commons/components/ClientOnly'
import {
  ConfirmModalRef,
  ModalConfirm,
} from '../../../modules/commons/components/ConfirmModal'
import Footer from '../../../modules/commons/components/Footer'
import Header from '../../../modules/commons/components/Header'
import { Layout } from '../../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'
import { toCurrencyBRL } from '../../../modules/commons/helpers/currency'
import { useStatus } from '../../../modules/commons/hooks/useStatus'
import { TrashIcon } from '../../../modules/commons/icons'
import { ProtectRoute } from '../../../modules/commons/components/ProtectRoute'

const ManageOrders: NextPage = () => {
  const confirmDialog = useRef<ConfirmModalRef>(null)

  const { orders, findOrderBy } = useOrders()
  const { listStatus } = useStatus()

  const { submit } = useCancelOrder()

  const onCancel = (id: number) => {
    submit(id)
  }

  const formattedDate = (str: Date) => format(new Date(str), 'dd/MM/yyyy')

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
                  onChange={(e) => findOrderBy(e?.value)}
                  options={[{ label: 'Todos', value: '' }, ...listStatus]}
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
                  {orders?.map((order) => (
                    <Tr key={order.id}>
                      <Td>{order.id}</Td>
                      <Td>{order.user.name}</Td>
                      <Td>
                        <Badge
                          variant="solid"
                          colorScheme="blue"
                          fontSize="x-small"
                        >
                          {order.status}
                        </Badge>
                      </Td>
                      <Td>{toCurrencyBRL(order.total)}</Td>
                      <Td>{formattedDate(order.createadAt)}</Td>
                      <Td>
                        <Flex gap="4">
                          <EditOrderModal {...order} />
                          <IconButton
                            variant="ghost"
                            color="danger"
                            size="sm"
                            aria-label="cancelar"
                            icon={<TrashIcon />}
                            onClick={() => {
                              confirmDialog.current?.openDialog({
                                describe: `O pedido de ${order.user.name} será cancelado.`,
                                onConfirm: () => {
                                  onCancel(order.id)
                                },
                              })
                            }}
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

        <ModalConfirm ref={confirmDialog} />
      </Layout>
    </ClientOnly>
  )
}

export default ProtectRoute(['admin', 'employee'], ManageOrders)
