import { isArray } from '@chakra-ui/utils'
import { fetchAPI } from '../../../commons/helpers/fetchApi'
import {
  FetcherResponse,
  SupplierResponseType,
  SupplierType,
} from './interface'

export const fetcher = async <TResult = SupplierType | SupplierType[]>(
  url: string
): Promise<FetcherResponse<TResult>> => {
  try {
    const response = await fetchAPI.get<
      SupplierResponseType | SupplierResponseType[]
    >(url)

    let data: unknown

    if (isArray<SupplierResponseType>(response.data)) {
      data = response.data.map((e) => ({
        ...e,
        apiCode: e.api_code,
      })) as SupplierType[]
    } else {
      data = {
        ...response.data,
        apiCode: response.data.api_code,
      } as SupplierType
    }

    return {
      ok: true,
      status: response.status,
      data: data as TResult,
    }
  } catch (err) {
    throw err
  }
}
