import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { ProductResponseType } from '../../../commons/types'

export const parseProductResponseType = (data: ProductResponseType[]) => {
  return data.map(({ variations, ...rest }) => ({
    ...rest,
    sizes: variations[0].Tamanho,
  }))
}

export const fetcher = async (url: string) => {
  try {
    const response = await fetchAPI.get<ProductResponseType[]>(url)

    const data = parseProductResponseType(response.data)

    return {
      ok: true,
      status: response.status,
      data,
    }
  } catch (err) {
    throw err
  }
}
