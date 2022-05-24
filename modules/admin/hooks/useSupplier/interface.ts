export type SupplierType = {
  id: number
  name: string
  cnpj: string
  apiCode: string
}

export type SupplierResponseType = {
  id: number
  name: string
  cnpj: string
  api_code: string
}

export type FetcherResponse<TData> = {
  ok: boolean
  status: number
  data: TData
}
