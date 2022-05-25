import { ProductResponseType } from '../../../commons/types'

export type ListProductsProps = {
  title: string
  inverseColor?: boolean
  products: ProductResponseType[]
}
