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
import { EditCategoryModal } from '../../../modules/admin/components/EditCategoryModal/component'
import { Field } from '../../../modules/commons/components/field'
import Footer from '../../../modules/commons/components/footer'
import Header from '../../../modules/commons/components/header'
import { Layout } from '../../../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'
import { TrashIcon } from '../../../modules/commons/icons'

const ManageCategories: NextPage = () => {
  return (
    <Layout header={<Header></Header>} footer={<Footer></Footer>}>
      <Container {...CONTAINER_PROPS} mb="12">
        <Heading my="12" fontSize="xl" color="blackAlpha.800">
          Gerenciar categorias de um produto
        </Heading>

        <Box p="6" mb="6" bgColor="whiteAlpha.900" boxShadow="xl">
          <Heading
            fontSize="medium"
            fontWeight="bold"
            mb="4"
            color="blackAlpha.800"
          >
            Adicionar Categoria
          </Heading>

          <FormControl as="form" mb="6">
            <Grid templateColumns={['1fr', null, '1fr .3fr 1fr']} gap="6">
              <Field>
                <Input placeholder="Nome da Categoria" size="md" />
              </Field>
              <Button type="submit" colorScheme="primary">
                Salvar
              </Button>
            </Grid>
          </FormControl>

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
                  <Tr>
                    <Td>Brasileirão</Td>
                    <Td>
                      <IconButton
                        size="sm"
                        variant="ghost"
                        color="danger"
                        aria-label="excluir"
                        icon={<TrashIcon />}
                      />

                      <EditCategoryModal />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Brasileirão</Td>
                    <Td>
                      <IconButton
                        size="sm"
                        variant="ghost"
                        color="danger"
                        aria-label="excluir"
                        icon={<TrashIcon />}
                      />
                      <EditCategoryModal />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Brasileirão</Td>
                    <Td>
                      <IconButton
                        size="sm"
                        variant="ghost"
                        color="danger"
                        aria-label="excluir"
                        icon={<TrashIcon />}
                      />
                      <EditCategoryModal />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default ManageCategories
