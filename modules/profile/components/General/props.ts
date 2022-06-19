import { cpf } from 'cpf-cnpj-validator'
import * as yup from 'yup'

export const schemaValidation = yup
  .object({
    name: yup.string().required('O campo Nome é obrigatório.'),
    cpf: yup
      .string()
      .required('O campo CPF é obrigatório.')
      .test({
        name: 'is-valid-cpf',
        message: 'O CPF informado não é valido.',
        test: (value) => value != null && cpf.isValid(value),
      }),
    birthDate: yup
      .string()
      .required('O campo Data de Nascimento é obrigatório.'),
    phone: yup
      .string()
      .required('O campo Telefone é obrigatório.')
      .test({
        name: 'is-valid-phone',
        message: 'O telefone informado não é valido.',
        test: (value) => value?.replace(/\D/g, '').length === 11,
      }),
  })
  .required()
