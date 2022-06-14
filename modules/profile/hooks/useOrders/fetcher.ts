import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { OrderItem, OrderResponse, OrderType } from './interface'

export const fetcher = async (url: string) => {
  try {
    const response = await fetchAPI.get<OrderResponse[]>(url)

    const data: OrderType[] = response.data.map(
      (e) =>
        ({
          id: e.id,
          total: e.total,
          addressIdentifier: e.address.alias,
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
