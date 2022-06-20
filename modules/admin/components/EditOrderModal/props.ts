import * as yup from 'yup'
import { CategoriesType } from '../../../commons/types'

const option = yup.object().shape({
  id: yup.number().required('Preencha todos os códigos de rastreio'),
  code: yup.string().required('Preencha todos os códigos de rastreio'),
})

export const schemaValidation = (minItems: number) =>
  yup.object({
    status: yup
      .string()
      .required('Defina o status do pedido, antes de salvar.'),
    // items: yup
    //   .array()
    //   .of(option)
    //   .required('Preencha todos os códigos de rastreio.')
    //   .min(minItems, 'Preencha todos os códigos de rastreio'),
  })
