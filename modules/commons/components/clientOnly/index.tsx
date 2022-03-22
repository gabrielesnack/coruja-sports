import { ReactNode } from 'react'
import { useIsClient } from '../../hooks/useIsClient'

function ClientOnly({ children }: { children?: ReactNode }): JSX.Element {
  const { isClient } = useIsClient()

  return <>{isClient ? children : undefined}</>
}

export default ClientOnly
