import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { LoginForm } from '../modules/authentication/components/loginForm'

const Login: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <Box
        d="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p="8"
        borderWidth="1px"
        borderRadius="lg"
      >
        <Heading size="xl" mb="2">
          Coruja Sports
        </Heading>
        <Text mb="4">Entrar na sua conta para continuar navegando</Text>
        <LoginForm />
      </Box>
    </Flex>
  )
}

export default Login
