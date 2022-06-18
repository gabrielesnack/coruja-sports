import { SupplierSubmitProps } from '../../hooks/useCreateOrUpdateSupplier/interface'
import { SupplierType } from '../../hooks/useSupplier/interface'

export type SupplierInputs = {
  name: string
  email: string
  site: string
  phone: string
}

export type SupplierFormProps = {
  initialValue?: SupplierType
  onSubmitCallback?: (data: SupplierType) => void
}
