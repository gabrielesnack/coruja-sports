import React, { useContext, useMemo, useState } from 'react'
import { ProductType } from '../../commons/types'

type StorageItems = {
  total: number
  item: ProductType
}

const CartContext = React.createContext({
  items: [] as StorageItems[],
  add: (product: ProductType, quantity: number) => null,
  update: (id: number, quantity: number) => null,
})

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<StorageItems[]>([] as StorageItems[])

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

    return null
  }

  const update = (id: number, quantity: number) => {
    const idx = items.findIndex((e) => e.item.id === id)
    const copyItems = JSON.parse(JSON.stringify(items)) as StorageItems[]
    copyItems[idx].total = quantity

    setItems(copyItems)

    return null
  }

  return (
    <CartContext.Provider value={{ items, add, update }}>
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
