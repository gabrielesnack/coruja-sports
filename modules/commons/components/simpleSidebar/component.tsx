import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  return (
    <Box minH="100vh" maxW="250px" bg={'whiteAlpha.900'}>
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}
