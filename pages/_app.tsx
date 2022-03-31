import type { AppProps } from 'next/app'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import theme from '../modules/commons/config/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Flex overflowX="hidden" maxW="calc(100vw - 1em)">
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
