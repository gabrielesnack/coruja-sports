import useSWR from 'swr'
import { fetcher } from './fetcher'

export const useCategories = () => {
  const { data, error, mutate } = useSWR(`categories`, fetcher)

  return { categories: data, isLoading: !data && !error, mutate }
}
