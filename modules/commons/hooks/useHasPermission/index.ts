import { useUserContext } from '../../contexts/userContext'

export const useUserHasPermission = () => {
  const { user, userStatus } = useUserContext()

  const isAdmin = !!user?.roles.find((role) => role.id === 1)
  const isEmployee = !!user?.roles.find((role) => role.id === 2)

  return {
    userStatus,
    isAdmin,
    isEmployee,
  }
}
