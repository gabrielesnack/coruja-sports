import { StorageHandler } from './storageHandler'

export type RequestTypes = 'POST' | 'GET' | 'PUT' | 'DELETE'

export type FetchContext = {
  method: RequestTypes
}

export type OptionsFetchType = {
  headers?: Record<string, string>
  body?: Record<string, unknown>
}

export type FetchResponseType<TResult> = {
  status: number
  data: TResult
}

export type FetchFactoryType = <TResponse>(
  path: string,
  options?: OptionsFetchType
) => Promise<FetchResponseType<TResponse>>

async function fetchFactory<TResponse>(
  this: FetchContext,
  path: string,
  options?: OptionsFetchType
): Promise<FetchResponseType<TResponse>> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${path}`

  const token = StorageHandler().getSessionToken()
  const Authorization = token ? `Bearear ${token}` : ''

  const body = options?.body ? JSON.stringify(options.body) : undefined

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

    if (!res.ok) throw res

    const data = await res
      .json()
      .then((res) => res)
      .catch(() => ({}))

    return {
      status: res.status as number,
      data: data as unknown as TResponse,
    }
  } catch (err: ReturnType<Error>) {
    throw err
  }
}

export const fetchAPI = {
  post: fetchFactory.bind({ method: 'POST' }) as FetchFactoryType,
  get: fetchFactory.bind({ method: 'GET' }) as FetchFactoryType,
  put: fetchFactory.bind({ method: 'PUT' }) as FetchFactoryType,
  del: fetchFactory.bind({ method: 'DELETE' }) as FetchFactoryType,
}
