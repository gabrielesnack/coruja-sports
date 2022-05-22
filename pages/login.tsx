import NextLink from 'next/link'
import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { LoginForm } from '../modules/authentication/components/LoginForm'
import { Layout } from '../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../modules/commons/config/constants'

const Login: NextPage = () => {
  return (
    <Layout>
      <Flex w="100%" justifyContent="center" alignItems="center">
        <Container
          {...CONTAINER_PROPS}
          maxWidth={[null, '80vw', '60vw', '45vw', '30vw']}
        >
          <Box
            d="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p="8"
            bgColor="whiteAlpha.900"
            borderWidth="1px"
            borderRadius="lg"
          >
            <NextLink href="/" passHref>
              <Link _hover={{ textDecoration: 'none' }}>
                <Heading size="xl" mb="2">
                  Coruja Sports
                </Heading>
              </Link>
            </NextLink>

            <Text mb="6" textAlign="center">
              Entrar na sua conta para continuar navegando
            </Text>
            <LoginForm />
          </Box>
        </Container>
      </Flex>
    </Layout>
  )
}

export default Login
