import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { fetchAPI, FetchResponseType } from '../../../commons/helpers/fetchApi'
import {
  AddressInputs,
  AddressInputValues,
} from '../../components/Address/interface'
import { parseAddress } from '../useAddress/fetcher'
import { FetchAddressResponse } from '../useAddress/interface'

export const useCreateAddress = () => {
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()

  const submit = async ({
    alias,
    street,
    number,
    city,
    state,
    district,
    zipCode,
  }: AddressInputValues) => {
    try {
      setLoading(true)

      const payload = {
        alias,
        street_address: street,
        number,
        district,
        zip_code: zipCode,
        city,
        state: state.value,
        country: 'Brasil',
      }
      const response = await fetchAPI.post<FetchAddressResponse>(
        `user-address`,
        { body: payload }
      )

      const data = parseAddress(response.data)
      console.log(data)

      setLoading(false)

      toast({
        title: 'Endereço criado com sucesso.',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
      })

      return {
        ok: true,
        status: response.status,
        data,
      }
    } catch (err) {
      setLoading(false)

      toast({
        title: 'Não foi possível adicionar um novo endereço',
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
