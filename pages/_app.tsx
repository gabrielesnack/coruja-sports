import type { AppProps } from 'next/app'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import theme from '../modules/commons/config/theme'
import { UserProvider } from '../modules/commons/contexts/userContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Flex overflowX="hidden" maxW="100%">
        <UserProvider>
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </UserProvider>
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
