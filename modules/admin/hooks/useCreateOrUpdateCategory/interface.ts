import { CategoriesType } from '../../../commons/types'

export type ProviderSubmitProps = Partial<CategoriesType>
export type ProviderSubmitResponse = {
  ok: boolean
  data?: CategoriesType
}
