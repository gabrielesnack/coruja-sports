import { Container, Grid, Heading } from '@chakra-ui/react'
import ProductCard from '../../../commons/components/productCard'
import { CONTAINER_PROPS } from '../../../commons/config/constants'
import { ListProductsProps } from './interface'

function ListProducts({ title, inverseColor }: ListProductsProps) {
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
        gap="4"
        templateColumns={['1fr', null, '1fr 1fr', '1fr 1fr 1fr']}
      >
        <ProductCard name="camisa do santos" description="" />
        <ProductCard name="camisa do santos" description="" />
        <ProductCard name="camisa do santos" description="" />
      </Grid>
    </Container>
  )
}

export default ListProducts
