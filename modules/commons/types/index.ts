export type ProductResponseType = {
  id: number
  name: string
  description: string
  price: number
  provider: ProviderType
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

type ProviderType = {
  created_at: string
  email: string
  id: number
  name: string
  phone: string
  site: string
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
