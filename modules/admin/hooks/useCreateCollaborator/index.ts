import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { CollaboratorsResponse } from '../useCollaborators/interface'

export const useCreateCollaborator = () => {
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()

  const submit = async (email: string) => {
    setLoading(true)

    try {
      const response = await fetchAPI.post<CollaboratorsResponse>(`employees`, {
        body: {
          email,
        },
      })

      toast({
        title: 'Colaborador criado com sucesso.',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
      })

      setLoading(false)

      return {
        ok: true,
        data: {
          ...response.data,
          roles: [{ id: '2', role: 'Funcionário' }],
        } as unknown as CollaboratorsResponse,
      }
    } catch (err) {
      setLoading(false)
      toast({
        title: 'Não foi possível criar o colaborador.',
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
