import { cnpj } from 'cpf-cnpj-validator'
import * as yup from 'yup'

export const schemaValidation = yup
  .object({
    name: yup.string().required('O campo Nome é obrigatório.'),
    apiCode: yup.string().required('O campo Código da API é obrigatório.'),
    cnpj: yup
      .string()
      .required('O campo CNPJ é obrigatório.')
      .test({
        name: 'is-valid-cnpj',
        message: 'O CNPJ informado não é valido.',
        test: (value) => value != null && cnpj.isValid(value),
      }),
  })
  .required()
