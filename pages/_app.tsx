import type { AppProps } from 'next/app'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import theme from '../modules/commons/config/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Flex overflowX="hidden" maxW="100%">
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
