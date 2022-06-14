import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { StatsReponseType } from './interface'

export const fetcher = async (url: string) => {
  try {
    const response = await fetchAPI.get<StatsReponseType>(url)

    return {
      ok: true,
      status: response.status,
      data: response.data,
    }
  } catch (err) {
    throw err
  }
}
