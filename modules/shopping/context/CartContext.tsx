import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useIsClient } from '../../commons/hooks/useIsClient'
import { useLocalStorage } from '../../commons/hooks/useLocalStorage'
import { ProductType } from '../../commons/types'

type StorageItems = {
  total: number
  item: ProductType
}

type CartContextType = {
  items: StorageItems[]
  add?: (product: ProductType, quantity: number) => void
  update?: (id: number, quantity: number) => void
  remove?: (id: number) => void
}

const CartContext = React.createContext({
  items: [] as StorageItems[],
} as CartContextType)

export const CartProvider: React.FC = ({ children }) => {
  const { getStorage, setStorage } =
    useLocalStorage<StorageItems[]>('@CART/PRODUCTS')
  const { isClient } = useIsClient()

  const [items, setItems] = useState<StorageItems[]>([] as StorageItems[])

  useEffect(() => {
    setItems(getStorage() || [])
  }, [isClient])

  const add = (product: ProductType, quantity = 1) => {
    const foundItem = items.findIndex(({ item }) => item.id === product.id)

    let newItems: StorageItems[]

    if (foundItem != -1) {
      newItems = [...items]
      newItems[foundItem].total += quantity
    } else {
      newItems = [...items, { total: quantity, item: product }]
    }

    setItems(newItems)
    setStorage(newItems)
  }

  const update = (id: number, quantity: number) => {
    const idx = items.findIndex((e) => e.item.id === id)
    const copyItems = JSON.parse(JSON.stringify(items)) as StorageItems[]
    copyItems[idx].total = quantity

    setItems(copyItems)
    setStorage(copyItems)
  }

  const remove = (id: number) => {
    const copyItems = items.filter((e) => e.item.id !== id)

    setItems(copyItems)
    setStorage(copyItems)
  }

  return (
    <CartContext.Provider value={{ items, add, remove, update }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const { items, ...rest } = useContext(CartContext)

  const notify = items && !!items.length
  const totalPrice = useMemo(
    () =>
      items.reduce(
        (acc, current) => acc + current.item.price * current.total,
        0
      ),
    [items]
  )

  return { ...rest, items, notify, totalPrice }
}
