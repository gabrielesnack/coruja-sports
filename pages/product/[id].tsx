import { Container, Flex, Show } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Footer from '../../modules/commons/components/Footer'
import Header from '../../modules/commons/components/Header'
import { Layout } from '../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../modules/commons/config/constants'
import { useProductDetail } from '../../modules/commons/hooks/useProductDetail'
import { ProductDetail } from '../../modules/shopping/components/ProductDetail'
import { ProductPreview } from '../../modules/shopping/components/ProductPreview/component'

const ProductDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const productId = Number(id)

  const { isLoading } = useProductDetail(productId)

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Container {...CONTAINER_PROPS} h="100%" mb="12" pt="4rem">
        <Flex
          w="100%"
          flexDir={['column', null, null, 'row']}
          justifyContent={'space-between'}
          alignItems={['center', null, null, 'initial']}
          gap="4"
        >
          {!isLoading && (
            <>
              <ProductPreview id={productId} />
              <ProductDetail id={productId} />
            </>
          )}
        </Flex>
      </Container>
    </Layout>
  )
}

export default ProductDetailPage
