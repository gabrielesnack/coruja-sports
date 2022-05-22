import useSWR from 'swr'
import { fetchProductDetail } from './fetcher'

export const useProductDetail = (id: number) => {
  const { data, error } = useSWR(
    id ? `products/${id}` : null,
    fetchProductDetail
  )

  return {
    data,
    isLoading: !data && !error,
    isError: !!error,
  }
}
