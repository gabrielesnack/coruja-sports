export type ProductResponseType = {
  id: number
  name: string
  description: string
  price: number
  provider: string
  variations: ProductVarationsType[]
  images: string[]
}

export type ProductType = Omit<ProductResponseType, 'variations'> & {
  sizes: string[]
}

type ProductVarationsType = {
  Tamanho: string[]
  Cor: string[]
}

export type CategoriesType = {
  id: number
  name: string
}

export type PriceChangeType = {
  floatValue: number
  formattedValue: string
  value: string
}

export type OptionType<TValue> = {
  label: string
  value: TValue
}
