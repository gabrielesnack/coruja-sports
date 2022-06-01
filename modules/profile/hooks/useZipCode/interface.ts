import {
  AddressInputs,
  AddressInputValues,
} from '../../components/Address/interface'

export type FetchResponse = {
  cep: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

export type ZipCode = Omit<
  AddressInputValues,
  'alias' | 'complement' | 'number'
>
