import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useIsClient } from '../../commons/hooks/useIsClient'
import { useLocalStorage } from '../../commons/hooks/useLocalStorage'
import { CartContextType, StorageActionProps, StorageItems } from './interface'

const CartContext = React.createContext({
  items: [] as StorageItems[],
} as CartContextType)

export const CartProvider: React.FC = ({ children }) => {
  const { isClient } = useIsClient()

  const { getStorage, setStorage } =
    useLocalStorage<StorageItems[]>('@CART/PRODUCTS')

  const [items, setItems] = useState<StorageItems[]>([] as StorageItems[])
  const [shipmentId, setShipmentId] = useState<number>()

  useEffect(() => {
    setItems(getStorage() || [])
  }, [isClient])

  const add = ({ id, product, quantity }: StorageActionProps) => {
    const foundItem = items.findIndex((item) => item.id === id)

    let newItems: StorageItems[]

    if (foundItem != -1) {
      newItems = [...items]
      newItems[foundItem].total += quantity
    } else {
      newItems = [...items, { id, total: quantity, item: product }]
    }

    setItems(newItems)
    setStorage(newItems)
  }

  const update = ({ id, quantity }: Omit<StorageActionProps, 'product'>) => {
    const idx = items.findIndex((item) => item.id === id)
    const copyItems = JSON.parse(JSON.stringify(items)) as StorageItems[]
    copyItems[idx].total = quantity

    setItems(copyItems)
    setStorage(copyItems)
  }

  const remove = (id: number) => {
    const copyItems = items.filter((item) => item.id !== id)

    setItems(copyItems)
    setStorage(copyItems)
  }

  const updateShipment = (value: number) => setShipmentId(value)

  return (
    <CartContext.Provider
      value={{ items, add, remove, update, updateShipment, shipmentId }}
    >
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
