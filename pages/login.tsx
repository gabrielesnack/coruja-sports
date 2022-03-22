import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { LoginForm } from '../modules/authentication/components/loginForm'
import { Layout } from '../modules/commons/components/layout'

const Login: NextPage = () => {
  return (
    <Layout>
      <Flex w="100%" justifyContent="center" alignItems="center">
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
          <Text mb="4" textAlign="center">
            Entrar na sua conta para continuar navegando
          </Text>
          <LoginForm />
        </Box>
      </Flex>
    </Layout>
  )
}

export default Login
