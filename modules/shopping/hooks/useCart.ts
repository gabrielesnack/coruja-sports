import { useEffect, useMemo, useState } from 'react'
import { useIsClient } from '../../commons/hooks/useIsClient'
import { ProductType } from '../../commons/types'

const key = '@CART/PRODUCTS'
const initItems = [] as ProductType[]

function StorageCart() {
  function load() {
    const items = localStorage.getItem(key)

    if (items) return JSON.parse(items) as ProductType[]

    return initItems as ProductType[]
  }

  function update(items: ProductType[]) {
    localStorage.setItem(key, JSON.stringify(items))
  }

  return {
    load,
    update,
  }
}

export const useCart = () => {
  const { isClient } = useIsClient()
  const [items, setItems] = useState<ProductType[]>(initItems) // handling reference state

  useEffect(() => {
    const loadItems = StorageCart().load()
    setItems(loadItems)
  }, [isClient])

  function update(product: ProductType) {
    const newItems = [...items, { ...product }]
    StorageCart().update(newItems) // handling localStorage
    Object.assign(items, newItems) // update common js reference to send the same value to all callers
    setItems(newItems) // trigger update on hook
  }

  return {
    items, // we are returning js reference
    update,
    notify: items && !!items.length, // change values from all references callers
  }
}
