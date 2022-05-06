import { Grid, GridItem } from '@chakra-ui/react'
import ProductCard from '../../../commons/components/productCard'
import { SearchListProps } from './interface'

export const SearchList = ({ products }: SearchListProps) => {
  return (
    <Grid gridTemplateColumns={['1fr', null, '1fr 1fr', '1fr 1fr 1fr']} gap="8">
      {products.map((props, idx) => (
        <GridItem key={`product-${idx}`}>
          <ProductCard {...props} />
        </GridItem>
      ))}
    </Grid>
  )
}
