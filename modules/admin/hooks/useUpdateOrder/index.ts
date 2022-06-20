import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { isDeliveringOrder } from '../../../commons/hooks/useStatus'
import { EditOrderInputs } from '../../components/EditOrderModal/interface'
import { SubmitUpdateOrderProps } from './interface'

export const useUpdateOrder = () => {
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()

  const submit = async ({ id, status, items }: SubmitUpdateOrderProps) => {
    setLoading(true)

    try {
      const payload = {
        status_id: status,
      }

      if (isDeliveringOrder(status)) {
        Object.assign(payload, {
          items: items
            .filter((e) => !!e)
            .map(({ id, code }) => ({
              item_id: id,
              delivery_tracking_code: code,
            })),
        })
      }

      await fetchAPI.put(`orders/${id}/status`, {
        body: payload,
      })

      toast({
        title: 'Pedido atualizado com sucesso.',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
      })

      setLoading(false)

      return { ok: true }
    } catch (err) {
      setLoading(false)
      toast({
        title: 'Não foi possível atualizar o pedido.',
        description:
          'Tente novamente mais tarde ou entre em contato com a nossa equipe.',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
      })

      return { ok: false }
    }
  }

  return {
    submit,
    isLoading,
  }
}
