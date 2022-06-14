import useSWR from 'swr'
import { fetcher } from './fetcher'

export const useStats = () => {
  const { data, error } = useSWR(`admin/stats`, (url: string) => fetcher(url))

  return {
    stats: data?.data,
    isLoading: data && !error,
  }
}
