import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from './fetcher'
import { SupplierType } from './interface'

export const useGetSupplier = (initTerm?: string) => {
  const [currentTerm, setTerm] = useState<string | undefined>(initTerm)

  const { data, error } = useSWR(
    `providers?search=${currentTerm || ''}`,
    (url: string) => fetcher<SupplierType[]>(url)
  )

  return {
    suppliers: data,
    isLoading: data && !error,
    setTerm,
  }
}
