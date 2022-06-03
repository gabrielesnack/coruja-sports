import { BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

export type LayoutProps = {
  header?: ReactNode
  children: ReactNode
  footer?: ReactNode
  boxProps?: BoxProps
}
