import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from './fetcher'

export const useOrders = (init?: number | undefined) => {
  const [currentStatus, findOrderBy] = useState<string | undefined>(
    init ? String(init) : ''
  )

  const param = currentStatus ? `?status_id=${currentStatus}` : ''

  const { data, error } = useSWR(`/orders/admin${param}`, (url: string) =>
    fetcher(url)
  )

  return {
    orders: data,
    isLoading: data && !error,
    findOrderBy,
  }
}
