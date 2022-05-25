import useSWR from 'swr'
import { fetcher } from './fetcher'

export const useProduct = (term?: string) => {
  const { data, error } = useSWR(`products?search=${term || ''}`, fetcher)

  return { products: data, isLoading: !data && !error }
}
