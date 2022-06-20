import * as yup from 'yup'

const option = yup.object().shape({
  label: yup.string(),
  value: yup.string(),
})

export const schemaValidation = yup
  .object({
    alias: yup.string().required('O campo Identificação é obrigatório.'),
    street: yup.string().required('O campo Rua é obrigatório.'),
    district: yup.string().required('O campo Bairro é obrigatório.'),
    zipCode: yup.string().required('O campo CEP é obrigatório.'),
    number: yup.string().required('O campo Número é obrigatório.'),
    city: yup.string().required('O campo Cidade é obrigatório.'),
    state: option
      .typeError('O campo Estado é obrigatório')
      .required('O campo Estado é obrigatório.'),
  })
  .required()
