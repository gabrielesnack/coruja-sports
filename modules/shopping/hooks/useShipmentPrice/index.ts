import useSWR from 'swr'
import { useCartContext } from '../../context/CartContext'
import { fetcher } from './fetcher'

export const useShipmentPrice = () => {
  const { items, shipmentId } = useCartContext()

  const shouldCalculate = shipmentId && items && !!items.length

  const payload = {
    user_address_id: shipmentId,
    items: items.map((e) => ({
      product_provider_variation_id: e.id,
      quantity: e.total,
    })),
  }

  const { data, error } = useSWR(
    shouldCalculate ? ['orders/get-ship-price', payload] : null,
    fetcher
  )

  return {
    shipmentPrice: data,
    isLoading: !!data && !error,
    isError: error,
  }
}
