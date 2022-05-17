import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Grid,
  GridItem,
  List,
  ListItem,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Icon,
} from '@chakra-ui/react'
import { CartIcon } from '../../icons/'
import { Logo } from './logo'
import { championships, tShirtModels } from './props'
import InputSearch from '../InputSearch'
import { UserMenu } from '../userMenu'
import { useRouter } from 'next/router'
import { useCartContext } from '../../../shopping/context/CartContext'

function HeaderDesktop() {
  const router = useRouter()
  const { notify } = useCartContext()

  return (
    <Grid
      w="100%"
      h="100%"
      templateColumns={['auto .6fr auto .7fr']}
      justifyContent="center"
      alignItems="center"
      py="3"
    >
      <Logo />

      <GridItem>
        <InputSearch />
      </GridItem>

      <GridItem>
        <List d="flex" alignItems={'center'} gap="6" px="6">
          <ListItem px="2">
            <Menu>
              <MenuButton
                variant="link"
                colorScheme="primary"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Campeonatos
              </MenuButton>
              <MenuList>
                {championships.map((e, idx) => (
                  <MenuItem key={`championship-${idx}`}>{e}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          </ListItem>
          <ListItem>
            <Menu>
              <MenuButton
                variant="link"
                colorScheme="primary"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Modelos
              </MenuButton>
              <MenuList>
                {tShirtModels.map((e, idx) => (
                  <MenuItem key={`tshirtmodels-${idx}`}>{e}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          </ListItem>
        </List>
      </GridItem>

      <GridItem d="flex" justifyContent="flex-end" gap="4" alignItems="center">
        <UserMenu />
        <Box
          pos="relative"
          d="flex"
          cursor="pointer"
          onClick={() => router.push('/cart')}
        >
          <CartIcon boxSize="6" mr="1" />
          {/* <Text size="sm">14</Text> */}
          {notify && (
            <Icon
              pos="absolute"
              top="-3px"
              right="0"
              viewBox="0 0 200 200"
              color="warning"
              boxSize="3"
            >
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
          )}
        </Box>
      </GridItem>
    </Grid>
  )
}

export default HeaderDesktop
