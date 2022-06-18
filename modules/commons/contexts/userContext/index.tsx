import React, { useContext, useEffect, useState } from 'react'
import { fetchAPI } from '../../helpers/fetchApi'
import { StorageHandler } from '../../helpers/storageHandler'
import {
  UserContextType,
  UserProviderProps,
  UserStatusType,
  UserType,
} from './interface'

const UserContext = React.createContext<UserContextType>({
  setUser: () => null,
  logout: () => null,
  userStatus: 'idle',
})

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType | undefined>()
  const [userStatus, setUserStatus] = useState<UserStatusType>('idle')

  function handleUser(props: UserType) {
    setUser((state) => ({ ...state, ...props }))
  }

  function logout() {
    setUser(undefined)
    setUserStatus('offline')
    StorageHandler().clear()
  }

  async function getUser() {
    if (!StorageHandler().hasToken() || user) return

    try {
      const response = await fetchAPI.get<UserType>('user')

      const { email, id, name, roles } = response.data
      handleUser({ email, id, name, roles })
      setUserStatus('online')
    } catch (err: ReturnType<Error>) {
      setUserStatus('offline')
      StorageHandler().clear()
    }
  }

  useEffect(() => {
    getUser()
  })

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: handleUser,
        userStatus,
        logout,
      }}
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
