import { OptionType } from '../../../commons/types'

export type AddressInputs = {
  id?: number
  alias: string
  street: string
  district: string
  zipCode: string
  number: number
  city: string
  state: string
  complement: string
}

export type AddressInputValues = AddressInputs & {
  state: OptionType<string>
}
