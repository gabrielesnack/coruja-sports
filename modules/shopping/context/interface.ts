import { ProductDetailType } from '../../commons/hooks/useProductDetail/interface'

export type StorageItems = {
  id: number
  total: number
  item: ProductDetailType
}

export type StorageActionProps = {
  id: number
  product: ProductDetailType
  quantity: number
}

export type CartContextType = {
  items: StorageItems[]
  add?: (props: StorageActionProps) => void
  update?: (props: Omit<StorageActionProps, 'product'>) => void
  remove?: (id: number) => void
  shipmentId?: number
  updateShipment?: (v: number) => void
}
