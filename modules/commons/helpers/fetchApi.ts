import { keysToSnakeCase } from './keysToSnakeCase'
import { StorageHandler } from './storageHandler'

type RequestTypes = 'POST' | 'GET' | 'PUT'
type FetchContext = {
  method: RequestTypes
}
type OptionsFetchType = {
  headers?: Record<string, string>
  body?: Record<string, unknown>
}

type FetchFactoryType = <TResponse>(
  path: string,
  options?: OptionsFetchType
) => Promise<TResponse>

async function fetchFactory<TResponse>(
  this: FetchContext,
  path: string,
  options?: OptionsFetchType
): Promise<TResponse> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${path}`

  const token = StorageHandler().getSessionToken()
  const Authorization = token ? `Bearear ${token}` : ''

  const body = options?.body
    ? JSON.stringify(keysToSnakeCase(options.body))
    : undefined

  try {
    const res = await fetch(url, {
      method: this.method,
      headers: new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        Authorization,
        ...options?.headers,
      }),
      body,
    })

    return res.json() as Promise<TResponse>
  } catch (err: ReturnType<Error>) {
    throw err
  }
}

export const fetchAPI = {
  post: fetchFactory.bind({ method: 'POST' }) as FetchFactoryType,
  get: fetchFactory.bind({ method: 'GET' }) as FetchFactoryType,
  put: fetchFactory.bind({ method: 'PUT' }) as FetchFactoryType,
}