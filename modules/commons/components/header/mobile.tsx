import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Collapse,
  Flex,
  IconButton,
  Portal,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Logo } from './logo'
import { MobileContent } from './mobileContent'

function HeaderMobile() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Flex
      w="100%"
      h="100%"
      py="3"
      justifyContent="space-between"
      alignItems="center"
    >
      <Logo />

      <IconButton
        size="md"
        borderRadius="none"
        variant="outline"
        colorScheme="primary"
        aria-label="Menu"
        icon={<HamburgerIcon />}
        onClick={onToggle}
      />

      <Portal>
        <Collapse in={isOpen} animateOpacity>
          <MobileContent />
        </Collapse>
      </Portal>
    </Flex>
  )
}

export default HeaderMobile
