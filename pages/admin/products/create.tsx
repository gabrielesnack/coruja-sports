import { Container, Heading } from '@chakra-ui/react'
import { NextPage } from 'next/types'
import Footer from '../../../modules/commons/components/Footer'
import Header from '../../../modules/commons/components/Header'
import { Layout } from '../../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'
import { ProductForm } from '../../../modules/admin/components/ProductForm'

const CreateProduct: NextPage = () => {
  return (
    <Layout header={<Header></Header>} footer={<Footer></Footer>}>
      <Container {...CONTAINER_PROPS} mb="12">
        <Heading my="12" fontSize="xl">
          Preencha as informações abaixo para cadastrar um produto
        </Heading>

        <ProductForm />
      </Container>
    </Layout>
  )
}

export default CreateProduct
