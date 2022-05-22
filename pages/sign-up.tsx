import NextLink from 'next/link'
import { Box, Container, Flex, Heading, Text, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { SignUpForm } from '../modules/authentication/components/SignupForm'
import ClientOnly from '../modules/commons/components/ClientOnly'
import { Layout } from '../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../modules/commons/config/constants'

const Login: NextPage = () => {
  return (
    <Layout>
      <ClientOnly>
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
              <Text mb="4" textAlign="center">
                Informe seus dados para criar sua conta
              </Text>
              <SignUpForm />
            </Box>
          </Container>
        </Flex>
      </ClientOnly>
    </Layout>
  )
}

export default Login
