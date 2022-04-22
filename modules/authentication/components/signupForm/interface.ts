import { RegisterUserProps } from '../../hooks/useRegister/interface'

export type RegisterInputsType = RegisterUserProps & {
  passwordConfirmation: RegisterUserProps['password']
}
