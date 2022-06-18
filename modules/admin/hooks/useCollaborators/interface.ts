export type CollaboratorsResponse = {
  id: number
  name: string
  email: string
  roles: {
    id: number
    role: string
  }[]
}
