import { useEffect, useState } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import { fetcher } from './fetcher'

export const useSearchProducts = (initTerm: string = '') => {
  const [currentTerm, setTerm] = useState<string>(initTerm)
  const [category, setCategory] = useState<string>('')
  const [variations, setVariations] = useState<string[]>([])

  const term = currentTerm || ''
  const url = `products?search=${term}&category_ids=${category}&variation_ids=${variations.join(
    ','
  )}`
  const { data, error, mutate } = useSWR('products?search=', () => fetcher(url))

  useEffect(() => {
    fetcher(url).then((data) => {
      mutate(data)
    })
  }, [category])

  return {
    products: data?.data,
    isLoading: !data && !error,
    setTerm,
    category,
    setCategory,
    variations,
    setVariations,
  }
}
