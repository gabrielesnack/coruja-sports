import { Box, Container, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import { SupplierForm } from '../../../modules/admin/components/SupplierForm'
import { SupplierSubmitProps } from '../../../modules/admin/hooks/useCreateOrUpdateSupplier/interface'
import { useFindSupplier } from '../../../modules/admin/hooks/useSupplier'
import { SupplierType } from '../../../modules/admin/hooks/useSupplier/interface'
import ClientOnly from '../../../modules/commons/components/ClientOnly'
import Footer from '../../../modules/commons/components/Footer'
import Header from '../../../modules/commons/components/Header'
import { Layout } from '../../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'

const UpdateSuppliers: NextPage = () => {
  const router = useRouter()

  const { id } = router.query

  const { isLoading, supplier, mutate } = useFindSupplier(
    id ? Number(id) : undefined
  )

  const onSubmitCallback = (data: SupplierType) => {
    if (!supplier) return

    mutate({ ...supplier, data })
  }

  return (
    <ClientOnly>
      <Layout header={<Header />} footer={<Footer />}>
        <Container {...CONTAINER_PROPS} py="10">
          <Box bgColor="whiteAlpha.900" boxShadow="xl" p="4" borderWidth="1px">
            <Heading mb="6" fontSize="xl">
              Atualizar Fornecedor
            </Heading>

            {!isLoading && (
              <SupplierForm
                initialValue={supplier?.data}
                onSubmitCallback={onSubmitCallback}
              />
            )}
          </Box>
        </Container>
      </Layout>
    </ClientOnly>
  )
}

export default UpdateSuppliers
