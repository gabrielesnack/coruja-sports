import * as yup from 'yup'
import { cpf } from 'cpf-cnpj-validator'

export const schemaValidation = yup
  .object({
    name: yup.string().required('O campo Nome é obrigatório.'),
    email: yup
      .string()
      .required('O campo Email é obrigatório.')
      .email('O email informado não é valido.'),
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
    password: yup.string().required('O campo Senha é obrigatório.'),
    passwordConfirmation: yup
      .string()
      .required('O campo Confirmar Senha é obrigatório.')
      .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais.'),
  })
  .required()
