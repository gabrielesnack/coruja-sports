import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from './fetcher'
import { SupplierType } from './interface'

export const useGetSupplier = (initTerm?: string) => {
  const [currentTerm, setTerm] = useState<string | undefined>(initTerm)

  const { data, error, mutate } = useSWR(
    `providers?search=${currentTerm || ''}`,
    (url: string) => fetcher<SupplierType[]>(url)
  )

  return {
    suppliers: data,
    isLoading: data && !error,
    mutate,
    setTerm,
  }
}

export const useFindSupplier = (id?: number) => {
  const { data, error, mutate } = useSWR(
    id ? `providers/${id}` : null,
    (url: string) => fetcher<SupplierType>(url)
  )

  return {
    supplier: data,
    isLoading: !data && !error,
    mutate,
  }
}
