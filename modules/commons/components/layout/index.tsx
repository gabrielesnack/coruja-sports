import { Flex } from '@chakra-ui/react'
import { HEADER_SIZE } from '../../config/constants'
import { LayoutProps } from './interface'

export function Layout({ children, header, footer, boxProps }: LayoutProps) {
  return (
    <Flex
      w="100vw"
      minH="100vh"
      flexDirection="column"
      bgColor={'gray.50'}
      {...boxProps}
    >
      {header}
      <Flex w="100%" h="100%" pt={HEADER_SIZE}>
        {children}
      </Flex>
      {footer}
    </Flex>
  )
}
