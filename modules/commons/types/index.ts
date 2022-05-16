export type ProductType = {
  id: number
  name: string
  description: string
  price: number
  variations: ProductVarationsType[]
  images: string[]
}

export type ProductVarationsType = {
  Tamanho: string[]
  Cor: string[]
}

export type CategoriesType = {
  id: number
  name: string
}
