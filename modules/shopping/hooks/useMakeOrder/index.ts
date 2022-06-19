import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { useCartContext } from '../../context/CartContext'
import { MakeOrderPayload, MakeOrderResponse } from './interface'

export const useMakeOrder = () => {
  const { items, shipmentId } = useCartContext()
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()

  const submit = async () => {
    try {
      setLoading(true)

      const payload = {
        user_address_id: shipmentId,
        items: items.map((e) => ({
          product_provider_variation_id: e.id,
          quantity: e.total,
        })),
      }

      const response = await fetchAPI.post<MakeOrderResponse>('orders', {
        body: payload,
      })

      setLoading(false)

      toast({
        title: 'Seu pedido foi criado com sucesso',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
      })

      return {
        ok: true,
        status: response.status,
        data: {
          paymentLink: response.data.payment_link,
        } as MakeOrderPayload,
      }
    } catch (err) {
      setLoading(false)

      toast({
        title: 'Ocorreu um erro durante a criação do pedido',
        description:
          'Tente novamente mais tarde ou entre em contato com a nossa equipe.',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
      })

      return {
        ok: false,
      }
    }
  }

  return {
    submit,
    isLoading,
  }
}
