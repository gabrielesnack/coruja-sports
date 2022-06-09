import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { fetchAPI } from '../../../commons/helpers/fetchApi'

export const useDeleteAddress = () => {
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()

  const submit = async (id: number) => {
    setLoading(true)

    try {
      const response = await fetchAPI.del(`user-address/${id}`)
      console.log({ response })

      toast({
        title: 'Endereço excluido com sucesso.',
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
        title: 'Não foi possível excluir o endereço.',
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
