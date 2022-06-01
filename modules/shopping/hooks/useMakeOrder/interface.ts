export type MakeOrderResponse = {
  order: {
    id: number
    status_id: number
    total: number
    total_shiping: number
    user_address_id: number
    user_id: number
  }
  payment_link: string
}

export type MakeOrderPayload = {
  paymentLink: string
}
