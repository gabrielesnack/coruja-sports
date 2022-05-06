import { Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import Footer from '../modules/commons/components/footer'
import Header from '../modules/commons/components/header'
import { Layout } from '../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../modules/commons/config/constants'

type ErrorType = {
  statusCode: number
}

const Error: NextPage<ErrorType> = ({ statusCode = 404 }) => {
  const router = useRouter()
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Container {...CONTAINER_PROPS}>
        <Flex
          flexDir="column"
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Heading textAlign="center">Erro {statusCode}</Heading>
          <Text mb="6">
            Ocorreu um erro não encontramos a página que você está buscando.
          </Text>
          <Button onClick={() => router.push('/')} colorScheme="primary">
            Página Inicial
          </Button>
        </Flex>
      </Container>
    </Layout>
  )
}

export const getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
