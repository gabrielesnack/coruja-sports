import { OptionType } from '../../../commons/types'
import { AddressInputValues } from '../../components/Address/interface'

export type FetchAddressResponse = {
  id: number
  user_id: number
  alias: string
  street_address: string
  number: number
  district: string
  zip_code: string
  city: string
  state: string
  country: string
  complement: string
}

export type AddressPayload = AddressInputValues & {
  id: number
}
