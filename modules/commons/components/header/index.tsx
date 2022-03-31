import { Box } from '@chakra-ui/react'
import HeaderDesktop from './desktop'
import HeaderMobile from './mobile'
import { useMediaQuery } from '@chakra-ui/react'
import ClientOnly from '../clientOnly'
import { HEADER_SIZE } from '../../config/constants'

function Header() {
  const [isLargerThan768] = useMediaQuery('(min-width:768px)')

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
        {isLargerThan768 && <HeaderDesktop />}
        {!isLargerThan768 && <HeaderMobile />}
      </ClientOnly>
    </Box>
  )
}

export default Header
