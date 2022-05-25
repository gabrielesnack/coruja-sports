import { Container, Heading } from '@chakra-ui/react'
import { NextPage } from 'next/types'
import Footer from '../../../modules/commons/components/Footer'
import Header from '../../../modules/commons/components/Header'
import { Layout } from '../../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'
import { ProductForm } from '../../../modules/admin/components/ProductForm'
import { useProductDetail } from '../../../modules/commons/hooks/useProductDetail'
import { useRouter } from 'next/router'
import {
  ProductFormProps,
  ProductInputsValues,
} from '../../../modules/admin/components/ProductForm/interface'
import { OptionType } from '../../../modules/commons/types'
import { ProductDetailType } from '../../../modules/commons/hooks/useProductDetail/interface'
import { useGetSupplier } from '../../../modules/admin/hooks/useSupplier'
import { toOption } from '../../../modules/admin/components/ProductForm/props'

const UpdateProduct: NextPage = () => {
  const router = useRouter()

  const { id } = router.query

  const { isLoading, data } = useProductDetail(id ? Number(id) : undefined)

  const initValues: ProductFormProps['initValues'] = {
    id: data?.id,
    name: data?.name,
    description: data?.description,
    image: data?.images[0].url,
    isHighlight: !!data?.isHighlight,
    price: data?.price,
    sizes: data?.sizes.map(({ id, name }) => ({
      label: name,
      value: id,
    })) as ProductInputsValues['sizes'],
  }

  return (
    <Layout header={<Header></Header>} footer={<Footer></Footer>}>
      <Container {...CONTAINER_PROPS} mb="12">
        <Heading my="12" fontSize="xl">
          Altere as informações abaixo para atualizar um produto
        </Heading>

        {!isLoading && data && <ProductForm initValues={initValues} />}
      </Container>
    </Layout>
  )
}

export default UpdateProduct
