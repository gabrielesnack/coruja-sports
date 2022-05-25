import * as yup from 'yup'
import { CategoriesType } from '../../../commons/types'

const option = yup.object().shape({
  label: yup.string(),
  value: yup.number(),
})

export const schemaValidation = yup
  .object({
    name: yup.string().required('O campo Nome é obrigatório.'),
    description: yup.string().required('O campo Descrição é obrigatório.'),
    price: yup.number().required('O campo Preço é obrigatório.'),
    image: yup.string().required('O campo Imagem é obrigatório.'),
    sizes: yup
      .array()
      .of(option)
      .required('O campo Tamanho é obrigatório.')
      .min(1, 'O campo Tamanho é obrigatório.'),
    categories: yup
      .array()
      .of(option)
      .required('O campo Categorias é obrigatório.')
      .min(1, 'O campo Categorias é obrigatório.'),
    provider: option.required('O campo Fornecedor é obrigatório.'),
  })
  .required()

export const InputPriceProps = {
  thousandSeparator: '.',
  prefix: 'R$ ',
  decimalSeparator: ',',
  decimalScale: 2,
}

export const toOption = (data?: CategoriesType[] | null) => {
  return data?.map((e) => ({ label: e.name, value: e.id })) || []
}
