import { ReactNode } from 'react'

export type UserType = {
  id: number
  name: string
  email: string
}

export type UserContextType = {
  user?: UserType
  setUser: (props: UserType) => void
  logout: () => void
  isLogged: boolean
}

export type UserProviderProps = {
  children: ReactNode
}
