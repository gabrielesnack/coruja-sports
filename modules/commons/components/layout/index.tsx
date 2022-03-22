import { Flex } from '@chakra-ui/react'
import { LayoutProps } from './interface'

export function Layout({ children, header }: LayoutProps) {
  return (
    <Flex w="100vw" h="100vh" flexDirection="column">
      {header}
      <Flex w="100%" h="100%" px={['4', null]}>
        {children}
      </Flex>
    </Flex>
  )
}
