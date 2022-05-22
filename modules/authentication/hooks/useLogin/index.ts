import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { StorageHandler } from '../../../commons/helpers/storageHandler'
import { LoginPayload, LoginUserProps } from './interface'

export const useLogin = () => {
  const toast = useToast()
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)

  async function login(payload: LoginUserProps) {
    setLoading(true)
    try {
      const res = await fetchAPI.post<LoginPayload>('login', {
        body: payload,
      })

      const { token } = res.data

      StorageHandler().setSessionToken(token)

      toast({
        title: 'Login realizado com sucesso.',
        description: 'Seja bem-vindo ao Coruja Sports.',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
      })

      router.push('/')
    } catch (error) {
      toast({
        title: 'Não foi possível conectar na conta.',
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
    login,
    isLoading,
  }
}
