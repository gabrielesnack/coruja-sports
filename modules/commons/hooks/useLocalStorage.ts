import { useIsClient } from './useIsClient'

export const useLocalStorage = <TResult>(key: string) => {
  const { isClient } = useIsClient()

  function getStorage() {
    if (!isClient) return

    const value = localStorage.getItem(key)
    if (value) return JSON.parse(value) as TResult

    return null
  }

  function setStorage<TValue>(value: TValue) {
    if (!isClient) return

    localStorage.setItem(key, JSON.stringify(value))
  }

  return {
    getStorage,
    setStorage,
  }
}
