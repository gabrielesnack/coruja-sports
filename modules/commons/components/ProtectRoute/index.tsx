import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useState } from 'react'
import { useUserHasPermission } from '../../hooks/useHasPermission'
import { AccessStatusType, ProtectRouteProps, RolesType } from './interface'

const ProtectRouteComponent = ({
  roles,
  render: Component,
}: ProtectRouteProps) => {
  const [isResolved, setResolver] = useState<boolean | null>(null)

  const router = useRouter()
  const { isAdmin, isEmployee, userStatus } = useUserHasPermission()

  useEffect(() => {
    const userRolesInfo: AccessStatusType = [
      ['admin', isAdmin],
      ['employee', isEmployee],
    ]

    if (userRolesInfo.some(([role, has]) => roles.includes(role) && has)) {
      setResolver(true)
      return
    }

    if (userStatus !== 'idle') router.push('/404')
  }, [isAdmin, isEmployee, userStatus])

  return <>{isResolved && <Component />}</>
}

export const ProtectRoute = (roles: RolesType[], render: FunctionComponent) => {
  return () => <ProtectRouteComponent roles={roles} render={render} />
}
