import { Box, Container } from '@chakra-ui/react'
import HeaderDesktop from './desktop'
import HeaderMobile from './mobile'
import { useMediaQuery } from '@chakra-ui/react'
import ClientOnly from '../ClientOnly'
import { CONTAINER_PROPS, HEADER_SIZE } from '../../config/constants'

function Header() {
  const [isLargerThan992] = useMediaQuery('(min-width:992px)')

  return (
    <Box
      as="header"
      position="fixed"
      zIndex="11"
      d="flex"
      w="100%"
      h={HEADER_SIZE}
      bgColor="white"
      boxShadow="base"
    >
      <ClientOnly>
        <Container {...CONTAINER_PROPS}>
          {isLargerThan992 && <HeaderDesktop />}
          {!isLargerThan992 && <HeaderMobile />}
        </Container>
      </ClientOnly>
    </Box>
  )
}

export default Header
