import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { CollaboratorsResponse } from './interface'

export const fetcher = async (url: string) => {
  try {
    const response = await fetchAPI.get<CollaboratorsResponse[]>(url)

    return response.data
  } catch (err) {
    throw err
  }
}
