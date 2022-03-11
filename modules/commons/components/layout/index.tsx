import { Flex } from '@chakra-ui/react'
import { LayoutProps } from './interface'

export function Layout({ children }: LayoutProps) {
  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={['4', null]}
    >
      {children}
    </Flex>
  )
}
