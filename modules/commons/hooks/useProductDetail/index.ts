import useSWR from 'swr'
import { fetcher } from './fetcher'

export const useProductDetail = (id?: number) => {
  const { data, error } = useSWR(id ? `products/${id}` : null, fetcher)

  return {
    data,
    isLoading: !data && !error,
    isError: !!error,
  }
}
