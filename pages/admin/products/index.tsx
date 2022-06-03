import { EditIcon } from '@chakra-ui/icons'
import {
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
import { useRef } from 'react'
import { ProductDetailModal } from '../../../modules/admin/components/ProductDetailModal'
import { useDeleteProduct } from '../../../modules/admin/hooks/useDeleteProduct'
import {
  ModalConfirm,
  ConfirmModalRef,
} from '../../../modules/commons/components/ConfirmModal'
import Footer from '../../../modules/commons/components/Footer'
import Header from '../../../modules/commons/components/Header'
import { Layout } from '../../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'
import { toCurrencyBRL } from '../../../modules/commons/helpers/currency'
import { useProduct } from '../../../modules/commons/hooks/useProduct'
import { TrashIcon } from '../../../modules/commons/icons'

const ManageProduct: NextPage = () => {
  const router = useRouter()

  const ref = useRef(
    null
  ) as unknown as React.MutableRefObject<HTMLInputElement>

  const confirmDialog = useRef<ConfirmModalRef>(null)

  const { products, mutate, setTerm, isLoading } = useProduct()
  const { submit } = useDeleteProduct()

  const onDelete = async (id: number) => {
    const res = await submit(id)

    if (res.ok && products)
      mutate({ ...products, data: products?.data.filter((e) => e.id !== id) })
  }

  const onSearch = () => {
    const value = ref?.current?.value as string
    setTerm(value)
  }

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e && (e?.code === 'Enter' || e?.code === 'NumpadEnter')) {
      onSearch()
    }
  }

  return (
    <Layout header={<Header></Header>} footer={<Footer></Footer>}>
      <Container {...CONTAINER_PROPS} mb="12">
        <Flex
          flexDir={['column', null, null, 'row']}
          justifyContent="space-between"
          alignItems="center"
          mt="12"
          mb="6"
        >
          <Heading
            fontSize="2xl"
            textAlign={['center', null, null, 'left']}
            mb={[6, null, 0]}
          >
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

        <Flex justifyContent="end" mb="6" gap="4">
          <Input
            ref={ref}
            bg="whiteAlpha.900"
            w={['100%', null, null, 'min-content']}
            placeholder="Buscar Produto"
            size="sm"
            onKeyPress={onEnter}
          />
          <Button
            colorScheme="primary"
            variant="outline"
            size="sm"
            rounded={0}
            onClick={onSearch}
          >
            Buscar
          </Button>
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
                  <Tr key={product.id}>
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
                          onClick={() => router.push(`products/${product.id}`)}
                        />
                        <ProductDetailModal id={product.id} />
                        <IconButton
                          variant="ghost"
                          color="danger"
                          aria-label="excluir"
                          icon={<TrashIcon />}
                          onClick={() => {
                            confirmDialog.current?.openDialog({
                              describe: `A camiseta ${product.name} será removida e após a confirmação a ação não poderá ser desfeita.`,
                              onConfirm: () => onDelete(product.id),
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
  )
}

export default ManageProduct
