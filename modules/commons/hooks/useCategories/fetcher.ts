import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { CategoriesType, ProductResponseType } from '../../types'

export const fetcher = async (url: string) => {
  try {
    const response = await fetchAPI.get<CategoriesType[]>(url)

    return {
      ok: true,
      status: response.status,
      data: response.data,
    }
  } catch (err) {
    throw err
  }
}
