import useSWR from 'swr'
import { fetcher } from './fetcher'

export const useOrders = () => {
  const { data, error, mutate } = useSWR(`orders`, (url: string) =>
    fetcher(url)
  )

  return {
    orders: data,
    isLoading: !data && !error,
    mutate,
  }
}
