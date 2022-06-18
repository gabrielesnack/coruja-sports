import NextLink from 'next/link'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Link,
  MenuDivider,
} from '@chakra-ui/react'
import { useUserContext } from '../../contexts/userContext'
import { getFirstName } from './props'
import { useRouter } from 'next/router'
import { useUserHasPermission } from '../../hooks/useHasPermission'

export const UserMenu = () => {
  const { userStatus, user, logout } = useUserContext()
  const { isAdmin, isEmployee } = useUserHasPermission()

  const isOnline = userStatus === 'online'
  const canSeeAdminLink = isAdmin || isEmployee

  const router = useRouter()

  const firstName = getFirstName(user?.name || '')

  return (
    <>
      {isOnline && (
        <Menu>
          <MenuButton
            as={Button}
            leftIcon={<Avatar size="xs" src="https://bit.ly/broken-link" />}
            rightIcon={<ChevronDownIcon />}
            variant="unstyle"
            size="sm"
          >
            {firstName}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => router.push('/profile/me')}>
              Meu Perfil
            </MenuItem>
            {canSeeAdminLink && (
              <MenuItem onClick={() => router.push('/admin')}>
                Painel Admin
              </MenuItem>
            )}
            <MenuDivider />
            <MenuItem color="danger" onClick={logout}>
              Sair
            </MenuItem>
          </MenuList>
        </Menu>
      )}

      {!isOnline && (
        <>
          <NextLink href="/sign-up" passHref>
            <Link fontWeight="semibold" variant="link" colorScheme="secondary">
              Cadastrar
            </Link>
          </NextLink>

          <NextLink href="/login" passHref>
            <Link fontWeight="semibold" variant="link" colorScheme="secondary">
              Entrar
            </Link>
          </NextLink>
        </>
      )}
    </>
  )
}
