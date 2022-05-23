import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { SupplierInputs } from '../../components/SupplierForm/interface'
import { cnpj as CNPJValidator } from 'cpf-cnpj-validator'

export const useCreateSupplier = () => {
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()

  const submit = async ({ cnpj, name, apiCode }: SupplierInputs) => {
    setLoading(true)

    try {
      const payload = {
        cnpj: CNPJValidator.strip(cnpj),
        name,
        api_code: apiCode,
      }
      const response = await fetchAPI.post('/providers', {
        body: payload,
      })

      toast({
        title: 'Fornecedor criado com sucesso.',
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
      toast({
        title: 'Não foi possível criar o fornecedor.',
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
