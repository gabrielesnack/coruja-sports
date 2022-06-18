export type OrderResponse = {
  id: number
  user_id: number
  user: {
    id: number
    name: string
  }
  status_id: number
  status: {
    id: number
    status: string
  }
  user_address_id: number
  address: {
    id: number
    user_id: number
    alias: string
    street_address: string
    number: number
    district: string
    zip_code: string
    city: string
    state: string
    country: string
    created_at: string
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
  user: {
    id: number
    name: string
  }
  statusId: number
  status: string
  address: OrderAddress
  total: number
  items: OrderItem[]
  createadAt: Date
}

export type OrderAddress = {
  id: number
  userId: number
  alias: string
  street: string
  number: number
  district: string
  zipCode: string
  city: string
  state: string
  country: string
  created_at: string
}

export type OrderItem = Omit<
  OrderItemResponse,
  'delivery_tracking_code' | 'item_price'
> & {
  price: number
  trackingCode: string
}
