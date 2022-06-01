import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { states } from '../../../commons/helpers/states'
import { OptionType } from '../../../commons/types'
import { AddressPayload, FetchAddressResponse } from './interface'

export const parseAddress = (address: FetchAddressResponse) => ({
  id: address.id,
  alias: address.alias,
  street: address.street_address,
  city: address.city,
  state: states.find(
    (e) => e.value === address.state
  ) as AddressPayload['state'],
  district: address.district,
  number: address.number,
  zipCode: address.zip_code,
  complement: address.complement,
})

export const fetcher = async (url: string) => {
  try {
    const response = await fetchAPI.get<FetchAddressResponse[]>(url)

    const data: AddressPayload[] = response.data.map(parseAddress)

    return {
      ok: true,
      status: response.status,
      data,
    }
  } catch (err) {
    throw err
  }
}
