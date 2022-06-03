import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from './fetcher'

export const useProduct = (initTerm?: string) => {
  const [currentTerm, setTerm] = useState<string | undefined>(initTerm)

  const { data, error, mutate } = useSWR(
    `products?search=${currentTerm || ''}`,
    fetcher
  )

  return { products: data, isLoading: !data && !error, mutate, setTerm }
}
