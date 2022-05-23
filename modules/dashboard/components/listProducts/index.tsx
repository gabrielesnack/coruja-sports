import { Container, Grid, Heading } from '@chakra-ui/react'
import ProductCard from '../../../commons/components/ProductCard'
import { CONTAINER_PROPS } from '../../../commons/config/constants'
import { ProductType } from '../../../commons/types'
import { ListProductsProps } from './interface'

function ListProducts({ title, inverseColor, products }: ListProductsProps) {
  return (
    <Container {...CONTAINER_PROPS} pb="12" mb="12">
      <Heading
        size="xl"
        mb="8"
        mt="6"
        textAlign={['center', null, null, 'left']}
        color={inverseColor ? 'whiteAlpha.900' : undefined}
      >
        {title}
      </Heading>

      <Grid
        width="100%"
        gap={['4', null, null, '6']}
        templateColumns={[
          '1fr',
          null,
          '1fr 1fr',
          '1fr 1fr 1fr ',
          '1fr 1fr 1fr 1fr',
        ]}
      >
        {products
          ?.slice(products.length - 8, products.length)
          .map((product) => {
            return <ProductCard key={`product-${product.id}`} {...product} />
          })}
      </Grid>
    </Container>
  )
}

export default ListProducts
