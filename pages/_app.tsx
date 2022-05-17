import type { AppProps } from 'next/app'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import theme from '../modules/commons/config/theme'
import { UserProvider } from '../modules/commons/contexts/userContext'
import { CartProvider } from '../modules/shopping/context/CartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Flex overflowX="hidden" maxW="100%">
        <UserProvider>
          <CartProvider>
            {/* @ts-ignore */}
            <Component {...pageProps} />
          </CartProvider>
        </UserProvider>
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
