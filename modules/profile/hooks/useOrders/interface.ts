export type OrderResponse = {
  id: number
  user_id: number
  status_id: number
  status: {
    id: number
    status: string
  }
  user_address_id: number
  address: {
    id: number
    alias: string
  }
  nfse_path: null
  total: number
  total_shipping: number
  note: null
  delivery_tracking_code: string
  payment_external_id: number
  items: OrderItemResponse[]
  created_at: Date
}

export type OrderItemResponse = {
  id: number
  delivery_tracking_code: string
  item_price: number
  quantity: number
  name: string
  image: string
  variation: string
}

export type OrderType = {
  id: number
  status: string
  addressIdentifier: string
  total: number
  items: OrderItem[]
  createadAt: Date
}

export type OrderItem = Omit<
  OrderItemResponse,
  'delivery_tracking_code' | 'item_price'
> & {
  price: number
  trackingCode: string
}
