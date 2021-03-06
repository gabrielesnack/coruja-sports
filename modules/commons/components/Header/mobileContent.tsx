import NextLink from 'next/link'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Button,
  Collapse,
  Flex,
  Link,
  List,
  ListItem,
  useDisclosure,
  Text,
  Box,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { HEADER_SIZE } from '../../config/constants'
import { useUserContext } from '../../contexts/userContext'
import InputSearch from '../InputSearch'
import { championships } from './props'

export function MobileContent() {
  const { isOpen: isOpenSectionChampions, onToggle: onToggleChampions } =
    useDisclosure()

  const { userStatus, logout } = useUserContext()

  const isOnline = userStatus === 'online'

  const router = useRouter()

  return (
    <Flex
      flexDirection="column"
      position="fixed"
      top="0"
      left="0"
      w="100vw"
      h="100vh"
      zIndex="10"
      pl="4"
      pr="10"
      pt={HEADER_SIZE}
      pb="4"
      bgColor="white"
    >
      <Flex mt="6" mb="6">
        <InputSearch />
      </Flex>

      <Box mb="8">
        <NextLink href="/profile/me" passHref>
          <Link fontWeight="semibold" variant="link" colorScheme="secondary">
            Visualizar meu perfil
          </Link>
        </NextLink>
      </Box>

      <Box mb="8">
        <NextLink href="/cart" passHref>
          <Link fontWeight="semibold" variant="link" colorScheme="secondary">
            Visualizar meu carrinho
          </Link>
        </NextLink>
      </Box>

      <Box mb="4">
        <Text fontWeight="semibold" mb="4" onClick={onToggleChampions}>
          Categorias <ChevronDownIcon />
        </Text>
        <Collapse in={isOpenSectionChampions} animateOpacity>
          <List d="flex" flexDirection="column" gap="6">
            {championships.map((e, idx) => (
              <ListItem key={`championships-${idx}`}>
                <Link>{e}</Link>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </Box>

      <Flex h="100%" flexDirection="column" justifyContent="flex-end" gap="4">
        {!isOnline && (
          <>
            <Button colorScheme="primary" onClick={() => router.push('/login')}>
              Entrar
            </Button>
            <Button
              colorScheme="secondary"
              variant="outline"
              onClick={() => router.push('/sign-up')}
            >
              Criar Conta
            </Button>
          </>
        )}
        {isOnline && (
          <Button colorScheme="danger" variant="outline" onClick={logout}>
            Sair
          </Button>
        )}
      </Flex>
    </Flex>
  )
}
