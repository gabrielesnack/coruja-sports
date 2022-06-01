import { useState } from 'react'
import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { states } from '../../../commons/helpers/states'
import { AddressInputValues } from '../../components/Address/interface'
import { FetchResponse, ZipCode } from './interface'

export const useZipCode = () => {
  const [isLoading, setLoading] = useState(false)

  const search = async (cep: string) => {
    try {
      setLoading(true)

      const response = await fetchAPI.get<FetchResponse>(
        `user-address/zip-code/${cep}`
      )

      setLoading(false)

      const data: ZipCode = {
        city: response.data.localidade,
        street: response.data.logradouro,
        district: response.data.bairro,
        state: states.find(
          (e) => e.value === response.data.uf
        ) as AddressInputValues['state'],
        zipCode: cep,
      }

      return {
        ok: true,
        data,
      }
    } catch (err) {
      setLoading(false)

      return {
        ok: false,
      }
    }
  }

  return {
    search,
    isLoading,
  }
}
