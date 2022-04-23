import * as yup from 'yup'

export const schemaValidation = yup
  .object({
    email: yup
      .string()
      .required('O campo Email é obrigatório.')
      .email('O email informado não é valido.'),
    password: yup.string().required('O campo Senha é obrigatório.'),
  })
  .required()
