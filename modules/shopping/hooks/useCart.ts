import { useEffect, useState } from 'react'
import { useIsClient } from '../../commons/hooks/useIsClient'
import { ProductType } from '../../commons/types'

const key = '@CART/PRODUCTS'
const initItems = [] as StorageItems[]

type StorageItems = {
  total: number
  item: ProductType
}

function StorageCart() {
  function load() {
    const items = localStorage.getItem(key)

    if (items) return JSON.parse(items) as StorageItems[]

    return initItems as StorageItems[]
  }

  function update(items: StorageItems[]) {
    localStorage.setItem(key, JSON.stringify(items))
  }

  return {
    load,
    update,
  }
}

export const useCart = () => {
  const { isClient } = useIsClient()
  const [items, setItems] = useState<StorageItems[]>(initItems) // handling reference state

  useEffect(() => {
    const loadItems = StorageCart().load()
    setItems(loadItems)
  }, [isClient])

  function save(storage: StorageItems[]) {
    StorageCart().update(storage) // handling localStorage
    Object.assign(items, storage) // update common js reference to send the same value to all callers
    setItems(storage) // trigger update on hook
  }

  function add(product: ProductType, quantity = 1) {
    const foundItem = items.findIndex(({ item }) => item.id === product.id)
    let newItems: StorageItems[]

    if (foundItem != -1) {
      newItems = [...items]
      newItems[foundItem].total += quantity
    } else {
      newItems = [...items, { total: quantity, item: product }]
    }

    // const newItems = [...items, { ...product }]
    save(newItems)
  }

  function update(id: number, quantity: number) {
    const newItems = [...items]
    const idx = items.findIndex((e) => e.item.id === id)
    newItems[idx].total = quantity

    save(newItems)
  }

  // const fullValue = items.reduce(e => )

  return {
    items, // we are returning js reference
    add,
    update,
    notify: items && !!items.length, // change values from all references callers
  }
}
