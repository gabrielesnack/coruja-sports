import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { ProviderSubmitProps, ProviderSubmitResponse } from './interface'

export const useCreateOrUpdateCategory = () => {
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()

  const submit = async ({ id, name }: ProviderSubmitProps) => {
    setLoading(true)

    try {
      const payload = {
        name,
      }

      const url = id ? `categories/${id}` : 'categories'
      const method = id ? 'put' : 'post'

      const response = await fetchAPI[method](url, {
        body: payload,
      })

      const title = id
        ? 'Categoria atualizada com sucesso'
        : 'Categoria criada com sucesso.'

      toast({
        title,
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
      })

      setLoading(false)

      return { ok: true, ...response } as ProviderSubmitResponse
    } catch (err) {
      setLoading(false)

      const title = id
        ? 'Não foi possível atualizar a categoria.'
        : 'Não foi possível criar a categoria.'

      const description = id
        ? 'Você não pode atualizar uma categoria com produtos.'
        : 'Tente novamente mais tarde ou entre em contato com a nossa equipe.'

      toast({
        title,
        description,
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
      })

      return { ok: false } as ProviderSubmitResponse
    }
  }

  return {
    submit,
    isLoading,
  }
}
