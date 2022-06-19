import { ReactNode } from 'react'

export type UserType = {
  id: number
  name: string
  email: string
  cpf: string
  phone: string
  birthDate?: Date
  roles: {
    id: number
    role: string
  }[]
}

export type UserResponse = Omit<UserType, 'birthDate'> & {
  birth_date?: Date
  phone_number: string
}

export type UserStatusType = 'idle' | 'online' | 'offline'

export type UserContextType = {
  isOnline: boolean
  isOffline: boolean
  userStatus: UserStatusType
  user?: UserType
  setUser: (props: UserType) => void
  logout: () => void
}

export type UserProviderProps = {
  children: ReactNode
}
