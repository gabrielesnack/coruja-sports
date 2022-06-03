import { EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
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
import { NextPage } from 'next/types'
import { useRef } from 'react'
import { CreateCategory } from '../../../modules/admin/components/CreateCategory'
import { EditCategoryModal } from '../../../modules/admin/components/EditCategoryModal/component'
import { useDeleteCategory } from '../../../modules/admin/hooks/useDeleteCategory'
import ClientOnly from '../../../modules/commons/components/ClientOnly'
import {
  ConfirmModalRef,
  ModalConfirm,
} from '../../../modules/commons/components/ConfirmModal'
import { Field } from '../../../modules/commons/components/Field'
import Footer from '../../../modules/commons/components/Footer'
import Header from '../../../modules/commons/components/Header'
import { Layout } from '../../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'
import { useCategories } from '../../../modules/commons/hooks/useCategories'
import { TrashIcon } from '../../../modules/commons/icons'
import { CategoriesType } from '../../../modules/commons/types'

const ManageCategories: NextPage = () => {
  const { categories, mutate } = useCategories()
  const { submit: deleteItem } = useDeleteCategory()

  const confirmDialog = useRef<ConfirmModalRef>(null)

  const onUpdateItem = (data: CategoriesType) => {
    if (!categories) return

    const idx = categories.data.findIndex(({ id }) => id === data.id)
    const newData = [...categories.data.filter((e) => e.id != idx), data]
    mutate({ ...categories, data: newData })
  }

  const onDeleteItem = async (id: number) => {
    if (!categories) return

    const res = await deleteItem(id)
    if (res.ok) {
      const newData = categories.data.filter((e) => e.id != id)
      mutate({ ...categories, data: newData })
    }
  }

  return (
    <ClientOnly>
      <Layout header={<Header></Header>} footer={<Footer></Footer>}>
        <Container {...CONTAINER_PROPS} mb="12">
          <Heading my="12" fontSize="xl" color="blackAlpha.800">
            Gerenciar categorias de um produto
          </Heading>

          <Box p="6" mb="6" bgColor="whiteAlpha.900" boxShadow="xl">
            <CreateCategory onSubmitCallback={onUpdateItem} />

            <Heading
              fontSize="medium"
              fontWeight="bold"
              mb="4"
              color="blackAlpha.800"
            >
              Categorias
            </Heading>

            <Box borderWidth="1px">
              <TableContainer>
                <Table size="sm" variant="striped" colorScheme="blackAlpha">
                  <Thead>
                    <Tr>
                      <Th>Nome da Categoria</Th>
                      <Th>Ações</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {categories?.data?.map((e) => (
                      <Tr key={e.id}>
                        <Td>{e.name}</Td>
                        <Td>
                          <EditCategoryModal
                            id={e.id}
                            name={e.name}
                            onSubmitCallback={onUpdateItem}
                          />
                          <IconButton
                            size="sm"
                            variant="ghost"
                            color="danger"
                            aria-label="excluir"
                            icon={<TrashIcon />}
                            onClick={() => {
                              confirmDialog.current?.openDialog({
                                describe: `A categoria ${e.name} será removida e após a confirmação a ação não poderá ser desfeita.`,
                                onConfirm: () => onDeleteItem(e.id),
                              })
                            }}
                          />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Container>

        <ModalConfirm ref={confirmDialog} />
      </Layout>
    </ClientOnly>
  )
}

export default ManageCategories
