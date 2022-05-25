import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { fetchAPI } from '../../../commons/helpers/fetchApi'

export const useDeleteProduct = () => {
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()

  const submit = async (id: number) => {
    setLoading(true)

    try {
      await fetchAPI.del(`products/${id}`)

      toast({
        title: 'Produto desativado com sucesso.',
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
        title: 'Não foi possível desativar o produto.',
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
