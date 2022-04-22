export type RegisterUserProps = {
  email: string
  name: string
  password: string
  birthDate: Date
  cpf: string
}

type UserType = {
  id: number
  name: string
  email: string
}

export type RegisterPayload = {
  token: string
  user: UserType
}
