import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { OrderItem, OrderResponse, OrderType, OrderAddress } from './interface'

const formatAddress = ({
  zip_code,
  user_id,
  street_address,
  ...rest
}: OrderResponse['address']): OrderAddress => ({
  ...rest,
  street: street_address,
  zipCode: zip_code,
  userId: user_id,
})

export const fetcher = async (url: string) => {
  try {
    const response = await fetchAPI.get<OrderResponse[]>(url)

    const data: OrderType[] = response.data.map(
      (e) =>
        ({
          id: e.id,
          user: e.user,
          total: e.total,
          address: formatAddress(e.address),
          statusId: e.status_id,
          status: e.status.status,
          items: e.items.map(
            ({ delivery_tracking_code, item_price, ...rest }) =>
              ({
                trackingCode: delivery_tracking_code,
                price: item_price,
                ...rest,
              } as OrderItem)
          ),
          createadAt: e.created_at,
        } as OrderType)
    )

    return data
  } catch (err) {
    throw err
  }
}
