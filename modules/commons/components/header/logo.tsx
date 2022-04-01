import { GridItem, Heading, Image } from '@chakra-ui/react'
import { LOGO_SIZE } from '../../config/constants'

export const Logo = () => {
  return (
    <GridItem d="flex" alignItems="center">
      <Image
        pos="relative"
        left="-1.75rem"
        src="corujasports.png"
        h={LOGO_SIZE}
      />

      <Heading pos="relative" left="-1.75rem" as="h1" fontSize="xl">
        Corujas Sports
      </Heading>
    </GridItem>
  )
}
