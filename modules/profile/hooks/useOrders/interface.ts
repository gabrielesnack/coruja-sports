export type OrdersResponse = {
  id: number
  user_id: number
  status_id: number
  user_address_id: number
  alias: string
  nfse_path: null
  total: number
  total_shipping: number
  note: null
  delivery_tracking_code: string
  payment_external_id: number
  created_at: Date
}

export type OrderType = {
  id: number
  status: string
  addressIdentifier: string
  total: number
  createadAt: Date
}
