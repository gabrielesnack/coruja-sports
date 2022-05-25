import * as yup from 'yup'

export const schemaValidation = yup
  .object({
    name: yup.string().required('O campo Nome é obrigatório.'),
    email: yup.string().required('O campo Email é obrigatório.'),
    telefone: yup.string().required('O campo Telefone é obrigatório.'),
  })
  .required()
