import { useEffect, useState } from 'react'

export function useIsClient() {
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    const canUseDom = !!(
      typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
    )
    setClient(canUseDom)
  }, [isClient])

  return { isClient }
}
