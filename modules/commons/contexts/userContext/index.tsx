import React, { useContext, useEffect, useState } from 'react'
import { fetchAPI } from '../../helpers/fetchApi'
import { StorageHandler } from '../../helpers/storageHandler'
import { UserContextType, UserProviderProps, UserType } from './interface'

const UserContext = React.createContext<UserContextType>({
  setUser: () => null,
  isLogged: false,
})

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType | undefined>()

  function handleUser(props: UserType) {
    setUser((state) => ({ ...state, ...props }))
  }

  async function getUser() {
    if (!StorageHandler().hasToken() || user) return

    try {
      const response = await fetchAPI.get<UserType>('user')
      const { email, id, name } = response
      handleUser({ email, id, name })
    } catch (err: ReturnType<Error>) {
      StorageHandler().clear()
    }
  }

  useEffect(() => {
    getUser()
  })

  return (
    <UserContext.Provider
      value={{ user, setUser: handleUser, isLogged: !!user }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => {
  const ctx = useContext(UserContext)

  return ctx
}

export { UserProvider, useUserContext }
