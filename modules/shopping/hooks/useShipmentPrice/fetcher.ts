import { fetchAPI } from '../../../commons/helpers/fetchApi'

export const fetcher = async (
  url: string,
  payload: Record<string, unknown>
) => {
  try {
    const response = await fetchAPI.post<number>(url, { body: payload })

    return response.data
  } catch (err) {
    throw err
  }
}
