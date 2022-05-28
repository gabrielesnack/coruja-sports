import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { fetchAPI } from '../../../commons/helpers/fetchApi'

export const useDeleteCategory = () => {
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()

  const submit = async (id: number) => {
    setLoading(true)

    try {
      await fetchAPI.del(`categories/${id}`)

      toast({
        title: 'Categoria removido com sucesso.',
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
        title: 'Não foi possível remover o categoria.',
        description:
          'Você não pode remover uma categoria que possui produtos atrelados.',
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
