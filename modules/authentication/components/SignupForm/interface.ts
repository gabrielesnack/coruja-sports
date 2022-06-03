import { FormControlProps } from '@chakra-ui/react'
import { RegisterUserProps } from '../../hooks/useRegister/interface'

export type RegisterInputsType = RegisterUserProps & {
  passwordConfirmation: RegisterUserProps['password']
}

export type FieldProps = FormControlProps & {
  errMsg?: string
}
