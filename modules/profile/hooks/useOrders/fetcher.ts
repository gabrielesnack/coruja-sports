import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { OrdersResponse, OrderType } from './interface'

export const fetcher = async (url: string) => {
  try {
    const response = await fetchAPI.get<OrdersResponse[]>(url)

    const data: OrderType[] = response.data.map(
      (e) =>
        ({
          id: e.id,
          total: e.total,
          addressIdentifier: e.alias,
          status: 'Pedido em Análise',
          createadAt: e.created_at,
        } as OrderType)
    )

    console.log({ data })

    return data
  } catch (err) {
    throw err
  }
}
