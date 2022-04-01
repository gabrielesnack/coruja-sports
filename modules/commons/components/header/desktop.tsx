import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import {
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightAddon,
  List,
  ListItem,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { CartIcon } from '../../icons/'
import { Logo } from './logo'
import { championships, tShirtModels } from './props'

function HeaderDesktop() {
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
        <InputGroup>
          <Input type="text" placeholder="O que você está buscando?" />
          <InputRightAddon pointerEvents="none">
            <SearchIcon />
          </InputRightAddon>
        </InputGroup>
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

      <GridItem d="flex" justifyContent="flex-end" gap="4">
        {/* <BagIcon boxSize="7" />
        <Avatar size="sm" src="https://bit.ly/broken-link" /> */}

        <Button variant="link" colorScheme="secondary">
          Cadastrar
        </Button>
        <Button variant="link" colorScheme="secondary">
          Entrar
        </Button>

        <CartIcon boxSize="6" />
      </GridItem>
    </Grid>
  )
}

export default HeaderDesktop
