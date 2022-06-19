import React, { useContext, useEffect, useState } from 'react'
import { fetchAPI } from '../../helpers/fetchApi'
import { StorageHandler } from '../../helpers/storageHandler'
import {
  UserContextType,
  UserProviderProps,
  UserResponse,
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
    const hasToken = StorageHandler().hasToken()

    if (!hasToken || user) {
      if (!hasToken) {
        setUserStatus('offline')
        StorageHandler().clear()
      }
      return
    }

    try {
      const response = await fetchAPI.get<UserResponse>('user')

      const {
        email,
        id,
        name,
        cpf,
        roles,
        birth_date: birthDate,
        phone_number: phone,
      } = response.data
      handleUser({
        email,
        id,
        name,
        roles,
        birthDate: birthDate ? new Date(birthDate) : undefined,
        phone,
        cpf,
      })
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
