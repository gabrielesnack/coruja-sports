import { ReactNode } from 'react'

export type UserType = {
  id: number
  name: string
  email: string
  roles: {
    id: number
    role: string
  }[]
}

export type UserStatusType = 'idle' | 'online' | 'offline'

export type UserContextType = {
  userStatus: UserStatusType
  user?: UserType
  setUser: (props: UserType) => void
  logout: () => void
}

export type UserProviderProps = {
  children: ReactNode
}
