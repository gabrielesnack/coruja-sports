import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { cnpj as CNPJValidator } from 'cpf-cnpj-validator'
import { SupplierSubmitProps } from './interface'

export const useCreateOrUpdateSupplier = () => {
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()

  const submit = async ({ id, cnpj, name, apiCode }: SupplierSubmitProps) => {
    setLoading(true)

    try {
      const payload = {
        cnpj: CNPJValidator.strip(cnpj),
        name,
        api_code: apiCode,
      }

      const url = id ? `providers/${id}` : 'providers'
      const method = id ? 'put' : 'post'

      const response = await fetchAPI[method](url, {
        body: payload,
      })

      const title = id
        ? 'Fornecedor atualizado com sucesso'
        : 'Fornecedor criado com sucesso.'

      toast({
        title,
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
      })

      setLoading(false)

      return { ok: true, ...response }
    } catch (err) {
      setLoading(false)

      const title = id
        ? 'Não foi possível atualizar o fornecedor.'
        : 'Não foi possível criar o fornecedor.'

      toast({
        title,
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
