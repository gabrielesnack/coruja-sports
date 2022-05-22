import { Container, Grid, Heading } from '@chakra-ui/react'
import ProductCard from '../../../commons/components/ProductCard'
import { CONTAINER_PROPS } from '../../../commons/config/constants'
import { ProductType } from '../../../commons/types'
import { ListProductsProps } from './interface'

function ListProducts({ title, inverseColor }: ListProductsProps) {
  const productProps = {
    id: 1,
    name: 'camisa do santos',
    description: '',
    variations: [
      { Tamanho: ['P', 'M', 'G'], Cor: ['Branco', 'Preto', 'Azul', 'Rosa'] },
    ],
    images: [],
    price: 10.14,
  } as ProductType

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
        <ProductCard {...productProps} />
        <ProductCard {...productProps} />
        <ProductCard {...productProps} />
      </Grid>
    </Container>
  )
}

export default ListProducts
