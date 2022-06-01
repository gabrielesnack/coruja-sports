import { fetchAPI } from '../../helpers/fetchApi'
import { ProductDetailResponse, ProductDetailType } from './interface'

export const fetcher = async (url: string): Promise<ProductDetailType> => {
  try {
    const response = await fetchAPI.get<ProductDetailResponse>(url)

    const {
      id,
      name,
      description,
      images,
      is_highlight: isHighlight,
      product_providers: providers,
    } = response.data

    const { price, variations } = providers[0] // products are registered by only one provider

    const filterVarationsBySize = variations.filter(
      (e) => e.variation_type.name === 'Tamanho'
    )

    const sizes = filterVarationsBySize.map((size) => ({
      id: size.id,
      productProviderVariationId: size.product_provider_variations.id,
      name: size.name,
      variationTypeName: size.variation_type.name,
    }))

    return {
      id,
      name,
      description,
      images,
      isHighlight,
      price,
      sizes,
    }
  } catch (err) {
    throw err
  }
}
