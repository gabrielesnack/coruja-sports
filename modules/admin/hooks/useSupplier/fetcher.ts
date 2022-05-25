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
      data = response.data.map(({ api_code, ...rest }) => ({
        ...rest,
        apiCode: api_code,
      })) as SupplierType[]
    } else {
      const { api_code, ...rest } = response.data
      data = {
        ...rest,
        apiCode: api_code,
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
