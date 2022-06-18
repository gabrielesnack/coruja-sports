import { Box, Container, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import { SupplierForm } from '../../../modules/admin/components/SupplierForm'
import ClientOnly from '../../../modules/commons/components/ClientOnly'
import Footer from '../../../modules/commons/components/Footer'
import Header from '../../../modules/commons/components/Header'
import { Layout } from '../../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'
import { ProtectRoute } from '../../../modules/commons/components/ProtectRoute'

const CreateSuppliers: NextPage = () => {
  const router = useRouter()

  return (
    <ClientOnly>
      <Layout header={<Header />} footer={<Footer />}>
        <Container {...CONTAINER_PROPS} py="10">
          <Box bgColor="whiteAlpha.900" boxShadow="xl" p="4" borderWidth="1px">
            <Heading mb="6" fontSize="xl">
              Novo Fornecedor
            </Heading>

            <SupplierForm />
          </Box>
        </Container>
      </Layout>
    </ClientOnly>
  )
}

export default ProtectRoute(['admin', 'employee'], CreateSuppliers)
