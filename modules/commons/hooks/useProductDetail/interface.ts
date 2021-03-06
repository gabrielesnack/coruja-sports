export type ProductDetailResponse = {
  id: number
  name: string
  description: string
  is_highlight: boolean
  product_providers: ProductProvidersResponse[]
  images: ImagesResponse[]
  categories: ProductCategoryResponse[]
}

export type ProductCategoryResponse = {
  id: number
  name: string
}

export type ImagesResponse = {
  id: number
  url: string
}

export type ProductProvidersResponse = {
  id: number
  product_id: number
  provider_id: number
  provider: ProductProviderType
  price: number
  variations: ProviderVariationsResponse[]
}

export type ProviderVariationsResponse = {
  id: number
  variation_type_id: number
  name: string
  product_provider_variations: ProductProviderVariations
  variation_type: {
    id: number
    name: string
  }
}

export type ProductProviderVariations = {
  id: number
  product_provider_id: number
  variation_id: number
}

export type ProductDetailType = {
  id: number
  name: string
  description: string
  isHighlight: boolean
  price: number
  sizes: ProductSizesType[]
  images: ImagesResponse[]
  categories: ProductCategoryResponse[]
  provider: ProductProviderType
}

export type ProductProviderType = {
  id: number
  name: string
}

export type ProductSizesType = {
  id: number
  productProviderVariationId: number
  name: string
  variationTypeName: string
}
