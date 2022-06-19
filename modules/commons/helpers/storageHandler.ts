import Cookies from 'js-cookie'

const SESSION_KEY = 'SESSION_TOKEN'

export function StorageHandler() {
  function getSessionToken() {
    return Cookies.get(SESSION_KEY) as string | undefined
  }

  function setSessionToken(value: string) {
    Cookies.set(SESSION_KEY, value, { expires: 7, path: '' })
  }

  function hasToken() {
    const token = getSessionToken()

    return !!token
  }

  function clear() {
    Cookies.remove(SESSION_KEY)
  }

  return {
    getSessionToken,
    setSessionToken,
    hasToken,
    clear,
  }
}
