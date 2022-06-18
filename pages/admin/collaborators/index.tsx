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
  Input,
  IconButton,
  FormControl,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import { useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useCollaborators } from '../../../modules/admin/hooks/useCollaborators'
import { useCreateCollaborator } from '../../../modules/admin/hooks/useCreateCollaborator'
import { useDeleteCollaborator } from '../../../modules/admin/hooks/useDeleteCollaborator'
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
import { TrashIcon } from '../../../modules/commons/icons'

const ManageCollaborators: NextPage = () => {
  const router = useRouter()
  const confirmDialog = useRef<ConfirmModalRef>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>()

  const { collaborators, mutate } = useCollaborators()
  const { submit: removeCollaborator } = useDeleteCollaborator()
  const { submit: createCollaborator } = useCreateCollaborator()

  const onCreate: SubmitHandler<{ email: string }> = async ({ email }) => {
    const res = await createCollaborator(email)
    if (res.ok && collaborators && res.data) {
      mutate([...collaborators, res.data])
    }
  }

  const onDelete = async (id: number) => {
    const res = await removeCollaborator(id)

    if (res.ok) mutate(collaborators?.filter((e) => e.id !== id))
  }

  return (
    <ClientOnly>
      <Layout header={<Header />} footer={<Footer />}>
        <Container {...CONTAINER_PROPS} py="10">
          <Flex justifyContent="space-between" alignItems="center" mb="10">
            <Heading fontSize="2xl">
              Bem vindo a sessão de colaboradores
            </Heading>

            <FormControl w="auto" as="form" onSubmit={handleSubmit(onCreate)}>
              <Flex gap="4">
                <Field
                  isInvalid={!!errors.email}
                  errMsg={errors.email?.message}
                >
                  <Input
                    placeholder="E-mail"
                    size="sm"
                    bgColor="whiteAlpha.900"
                    {...register('email', { required: 'Campo Obrigatório' })}
                  />
                </Field>
                <Button type="submit" colorScheme="primary" size="sm" px="10">
                  Novo Colaborador
                </Button>
              </Flex>
            </FormControl>
          </Flex>

          <Box bgColor="whiteAlpha.900" boxShadow="xl" p="1" borderWidth="1px">
            <TableContainer>
              <Table size="sm" variant="striped" colorScheme="blackAlpha">
                <Thead>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>E-mail</Th>
                    <Th>Permissão</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {collaborators?.map((collaborator) => (
                    <Tr key={collaborator.id}>
                      <Td>{collaborator.name}</Td>
                      <Td>{collaborator.email}</Td>
                      <Td maxWidth="72px">{collaborator.roles[0].role}</Td>
                      <Td>
                        <IconButton
                          variant="ghost"
                          color="danger"
                          aria-label="excluir"
                          icon={<TrashIcon />}
                          onClick={() => {
                            confirmDialog.current?.openDialog({
                              describe: `${collaborator.name} não vai poder acessar à área administrativa depois de confirmar a ação.`,
                              onConfirm: () => onDelete(collaborator.id),
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
        </Container>

        <ModalConfirm ref={confirmDialog} />
      </Layout>
    </ClientOnly>
  )
}

export default ManageCollaborators
