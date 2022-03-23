import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import {
  Button,
  Collapse,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Link,
  List,
  ListItem,
  Portal,
} from '@chakra-ui/react'
import { useState } from 'react'
import { HEADER_SIZE, LOGO_SIZE } from './constants'

function HeaderMobile() {
  const [isOpen, setOpen] = useState(false)
  const handleToggleMenu = () => setOpen(!isOpen)

  return (
    <Flex
      w="100%"
      h="100%"
      py="3"
      px="4"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image src="corujasports.png" h={LOGO_SIZE} />

      <IconButton
        size="md"
        borderRadius="none"
        variant="outline"
        colorScheme="primary"
        aria-label="Menu"
        icon={<HamburgerIcon />}
        onClick={handleToggleMenu}
      />

      <Portal>
        <Collapse in={isOpen} animateOpacity>
          <Flex
            flexDirection="column"
            position="fixed"
            top="0"
            left="0"
            w="100vw"
            h="100vh"
            zIndex="10"
            px="4"
            py={HEADER_SIZE}
            bgColor="white"
          >
            <InputGroup mt="6" mb="6">
              <Input type="text" placeholder="O que você está buscando?" />
              <InputRightAddon pointerEvents="none" children={<SearchIcon />} />
            </InputGroup>

            <List d="flex" flexDirection="column" gap="6">
              <ListItem borderBottom="1px" borderColor="gray.200">
                <Link>Camisetas recomendas para você</Link>
              </ListItem>
              <ListItem borderBottom="1px" borderColor="gray.200">
                <Link>Tênis do seus times favoritos </Link>
              </ListItem>
              <ListItem borderBottom="1px" borderColor="gray.200">
                <Link>Sobre nós </Link>
              </ListItem>
              <ListItem borderBottom="1px" borderColor="gray.200">
                <Link>Fale conosco </Link>
              </ListItem>
            </List>

            <Flex
              h="100%"
              flexDirection="column"
              justifyContent="flex-end"
              gap="4"
            >
              <Button colorScheme="primary">Entrar</Button>
              <Button colorScheme="secondary" variant="outline">
                Criar Conta
              </Button>
            </Flex>
          </Flex>
        </Collapse>
      </Portal>
    </Flex>
  )
}

export default HeaderMobile
