import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { FetcherResponse, SupplierType } from './interface'

export const fetcher = async <TResult = SupplierType | SupplierType[]>(
  url: string
): Promise<FetcherResponse<TResult>> => {
  try {
    const response = await fetchAPI.get<TResult>(url)

    return {
      ok: true,
      status: response.status,
      data: response.data,
    }
  } catch (err) {
    throw err
  }
}
