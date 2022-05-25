import { OptionType } from '../../../commons/types'

export type ProductInputs = {
  name: string
  description: string
  isHighlight: boolean
  price: number
  image: string
  provider: number
  sizes: number
  categories: number
}

export type ProductInputsValues = ProductInputs & {
  id?: number
  provider: OptionType<number>
  sizes: OptionType<number>[]
  categories: OptionType<number>[]
}

export type ProductFormProps = {
  initValues?: Partial<ProductInputsValues> & {
    id?: number
  }
}
