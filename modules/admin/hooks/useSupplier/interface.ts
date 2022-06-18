export type SupplierType = {
  id: number
  name: string
  site: string
  email: string
  phone: string
}

export type SupplierResponseType = {
  id: number
  name: string
  site: string
  email: string
  phone: string
}

export type FetcherResponse<TData> = {
  ok: boolean
  status: number
  data: TData
}
