import { Container, Heading, Flex } from '@chakra-ui/react'
import { NextPage } from 'next//types'
import ClientOnly from '../modules/commons/components/clientOnly'
import Footer from '../modules/commons/components/footer'
import Header from '../modules/commons/components/header'
import { Layout } from '../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../modules/commons/config/constants'
import { MercadoPagoSDK } from '../modules/commons/thirdparty/MercadoPago'
import { ResumeCart } from '../modules/shopping/components/ResumeCart'
import { TableCart } from '../modules/shopping/components/TableCart'

const Cart: NextPage = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <ClientOnly>
        <MercadoPagoSDK />

        <Container {...CONTAINER_PROPS}>
          <Flex flexDir="column" gap="8" py="10" mb="10">
            <Heading d={['none', null, null, 'block']} fontWeight="semibold">
              Meu Carrinho
            </Heading>

            <Flex flexDir={['column-reverse', null, null, 'row']} gap="6">
              <TableCart />
              <ResumeCart />
            </Flex>
          </Flex>
        </Container>
      </ClientOnly>
    </Layout>
  )
}

export default Cart
