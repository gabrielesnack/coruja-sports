import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from './fetcher'

export const useOrders = (init = 1) => {
  const [currentStatus, findOrderBy] = useState<string | undefined>(
    String(init)
  )

  const { data, error } = useSWR(
    `/orders/admin?status_id=${currentStatus}`,
    (url: string) => fetcher(url)
  )

  return {
    orders: data,
    isLoading: data && !error,
    findOrderBy,
  }
}
