import { CategoriesType } from '../../../commons/types'

export type EditCategoryModalProps = {
  id: number
  name: string
  onSubmitCallback: (data: CategoriesType) => void
}
