export type SupplierType = {
  id: number
  name: string
  email: string
  telefone: string
}

export type SupplierResponseType = {
  id: number
  name: string
  email: string
  telefone: string
}

export type FetcherResponse<TData> = {
  ok: boolean
  status: number
  data: TData
}
