import { Flex } from '@chakra-ui/react'
import { HEADER_SIZE } from '../../config/constants'
import Footer from '../footer'
import { LayoutProps } from './interface'

export function Layout({ children, header }: LayoutProps) {
  return (
    <Flex w="100vw" minH="100vh" flexDirection="column">
      {header}
      <Flex w="100%" h="100%" py={HEADER_SIZE}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}
