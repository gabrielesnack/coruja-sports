import { useToast } from '@chakra-ui/react'
import { cpf as CPFValidator } from 'cpf-cnpj-validator'
import { format } from 'date-fns'
import { useState } from 'react'
import { fetchAPI, FetchResponseType } from '../../../commons/helpers/fetchApi'
import { ProfileInputs } from '../../components/General/interface'

export const useUpdateProfile = () => {
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()

  const submit = async ({ name, cpf, birthDate, phone }: ProfileInputs) => {
    try {
      setLoading(true)

      const payload = {
        name,
        cpf: CPFValidator.strip(cpf),
        phone_number: phone?.replace(/\D/g, ''),
        birth_date: format(new Date(birthDate), 'yyyy-MM-dd'),
      }

      const response = await fetchAPI.put(`users/profile-information`, {
        body: payload,
      })

      setLoading(false)

      toast({
        title: 'Informações atualizadas com sucesso.',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
      })

      return {
        ok: true,
        status: response.status,
      }
    } catch (err) {
      setLoading(false)
      console.log(err)

      toast({
        title: 'Não foi possível atualizar as informações',
        description:
          'Tente novamente mais tarde ou entre em contato com a nossa equipe.',
        status: 'error',
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
