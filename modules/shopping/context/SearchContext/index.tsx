import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { useIsClient } from '../../../commons/hooks/useIsClient'
import { ProductResponseType } from '../../../commons/types'
import { fetcher } from '../../hooks/useSearchProducts/fetcher'

const SearchContext = React.createContext(
  {} as {
    products?: ProductResponseType[]
    category: string
    term: string
    sortPrice: string
    variations: string[]
    changeCategory?: (value: string) => void
    changeTerm?: (value: string) => void
    changeVariations?: (value: string[]) => void
    changeSortPrice?: (value: string) => void
  }
)

type ChangeParams = {
  term: string
  category: string
  sizes: string
  sortPrice: string
}

export const SearchProvider: React.FC = ({ children }) => {
  const router = useRouter()

  const [products, setProducts] = useState<ProductResponseType[]>()
  const [currentTerm, setTerm] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [variations, setVariations] = useState<string[]>([])
  const [sortPrice, setSortPrice] = useState<string>('')

  useEffect(() => {
    if (router.query.product) setTerm(router.query.product[0])
    if (router.query.categoriesIds)
      setCategory(router.query.categoriesIds as string)
    if (router.query.sortPrice) setSortPrice(router.query.sortPrice as string)
    if (router.query.sizesIds)
      setVariations((router.query.sizesIds as string).split(','))
  }, [router.isReady])

  const sizes = variations.join(',')

  const doSearch = async ({
    term,
    category,
    sizes,
    sortPrice,
  }: ChangeParams) => {
    const url = `products?search=${term}&category_ids=${category}&variation_ids=${sizes}&sort_price=${sortPrice}`

    const response = await fetcher(url)
    if (response.ok)
      setProducts(response.data as unknown as ProductResponseType[])
  }

  const updateWindowURL = ({
    term,
    category,
    sizes,
    sortPrice,
  }: ChangeParams) => {
    router.replace({
      pathname: term,
      query: `categoriesIds=${category}&sizesIds=${sizes}&sortPrice=${sortPrice}`,
    })
  }

  const changeCategory = (category: string) => {
    updateWindowURL({ category, term: currentTerm, sizes, sortPrice })
    doSearch({ category, term: currentTerm, sizes, sortPrice })
    setCategory(category)
  }

  const changeTerm = (term: string) => {
    updateWindowURL({ category, term, sizes, sortPrice })
    doSearch({ category, term, sizes, sortPrice })
    setTerm(term)
  }

  const changeSortPrice = (sortPrice: string) => {
    updateWindowURL({ category, term: currentTerm, sizes, sortPrice })
    doSearch({ category, term: currentTerm, sizes, sortPrice })
    setSortPrice(sortPrice)
  }

  const changeVariations = (variations: string[]) => {
    const variationsTreated = variations.join(',')
    updateWindowURL({
      category,
      term: currentTerm,
      sizes: variationsTreated,
      sortPrice,
    })
    doSearch({
      category,
      term: currentTerm,
      sizes: variationsTreated,
      sortPrice,
    })

    setVariations(variations)
  }

  return (
    <SearchContext.Provider
      value={{
        products,
        sortPrice,
        category,
        term: currentTerm,
        variations,
        changeCategory,
        changeTerm,
        changeVariations,
        changeSortPrice,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => {
  const ctx = useContext(SearchContext)

  return ctx
}
