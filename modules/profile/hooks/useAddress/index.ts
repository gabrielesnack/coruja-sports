import useSWR from 'swr'
import { fetcher } from './fetcher'

export const useAddress = () => {
  const { data, error, mutate } = useSWR(`user-address`, (url: string) =>
    fetcher(url)
  )

  return {
    addresses: data,
    isLoading: !data && !error,
    mutate,
  }
}
