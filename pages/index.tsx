import { Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <Heading size="xl">Coruja Sports</Heading>
    </Flex>
  )
}

export default Home
