import { Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '../modules/commons/components/header'
import { Layout } from '../modules/commons/components/layout'

const Home: NextPage = () => {
  return (
    <Layout header={<Header />}>
      <Flex w="100%" justifyContent="center" alignItems="center">
        <Heading size="xl">Coruja Sports</Heading>
      </Flex>
    </Layout>
  )
}

export default Home
