import * as yup from 'yup'
import { isDeliveringOrder } from '../../../commons/hooks/useStatus'

const option = yup.object().shape({
  id: yup.number().required('Preencha todos os códigos de rastreio'),
  code: yup.string().required('Preencha todos os códigos de rastreio'),
})

export const schemaValidation = (minItems: number) => {
  return yup.object({
    status: yup
      .string()
      .required('Defina o status do pedido, antes de salvar.'),
    items: yup.array().when(['status'], (status, schema) => {
      return isDeliveringOrder(status)
        ? schema
            .of(option)
            .min(minItems, 'Preencha todos os códigos de rastreio')
        : schema
    }),
  })
}
