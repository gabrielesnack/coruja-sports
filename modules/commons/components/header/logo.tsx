import { GridItem, Heading, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { LOGO_SIZE } from '../../config/constants'

export const Logo = () => {
  const router = useRouter()

  const redirectToHome = () => router.push('/')

  return (
    <GridItem
      d="flex"
      alignItems="center"
      cursor="pointer"
      onClick={redirectToHome}
    >
      <Image
        pos="relative"
        left="-1.75rem"
        src="/corujasports.png"
        alt="Coruja Sports Logo Marca"
        h={LOGO_SIZE}
      />

      <Heading pos="relative" left="-1.75rem" as="h1" fontSize="xl">
        Corujas Sports
      </Heading>
    </GridItem>
  )
}
