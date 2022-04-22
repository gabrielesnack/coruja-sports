import { useToast } from '@chakra-ui/react'
import { cpf } from 'cpf-cnpj-validator'
import { resolvePtr } from 'dns/promises'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { StorageHandler } from '../../../commons/helpers/storageHandler'
import { useUserContext } from '../../../commons/contexts/userContext'
import { RegisterPayload, RegisterUserProps } from './interface'

export const useRegister = () => {
  const toast = useToast()
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)
  const { setUser } = useUserContext()

  async function registerUser(data: RegisterUserProps) {
    setLoading(true)
    try {
      const payload = {
        ...data,
        cpf: cpf.strip(data.cpf),
      }

      const res = await fetchAPI.post<RegisterPayload>('register', {
        body: payload,
      })

      const {
        token,
        user: { name, email, id },
      } = res

      StorageHandler().setSessionToken(token)
      setUser({ name, email, id })

      toast({
        title: 'Usuário criado com sucesso.',
        description:
          'Seja bem-vindo ao Coruja Sports, você será redirecionado a página inicial.',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
        onCloseComplete: () => {
          router.push('/')
        },
      })
    } catch (error) {
      toast({
        title: 'Erro ao registrar o usuário.',
        description:
          'Tente novamente mais tarde ou entre em contato com a nossa equipe.',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
      })
    }

    setLoading(false)
  }

  return {
    registerUser,
    isLoading,
  }
}
