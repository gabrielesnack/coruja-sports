import { FunctionComponent } from 'react'

export type RolesType = 'admin' | 'employee'
export type ProtectRouteProps = {
  roles: RolesType[]
  render: FunctionComponent
}

export type AccessStatusType = [RolesType, boolean][]
