import { SearchIcon } from '@chakra-ui/icons'
import {
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightAddon,
  Link,
  List,
  ListItem,
  Image,
  Avatar,
} from '@chakra-ui/react'
import { LOGO_SIZE } from '../../config/constants'
import { BagIcon } from '../../icons/'

function HeaderDesktop() {
  return (
    <Grid
      w="100%"
      h="100%"
      templateColumns={['auto .1fr .6fr .7fr']}
      justifyContent="center"
      alignItems="center"
      py="3"
      px="4"
      gap="4"
    >
      <GridItem>
        <Image src="corujasports.png" h={LOGO_SIZE} />
      </GridItem>

      <GridItem>
        <List d="flex" alignItems={'center'} pr="6">
          <ListItem px="2">
            <Link>Camisetas</Link>
          </ListItem>
          <ListItem>
            <Link>Tênis</Link>
          </ListItem>
        </List>
      </GridItem>

      <GridItem>
        <InputGroup>
          <Input type="text" placeholder="O que você está buscando?" />
          <InputRightAddon pointerEvents="none">
            <SearchIcon />
          </InputRightAddon>
        </InputGroup>
      </GridItem>

      <GridItem d="flex" justifyContent="flex-end" gap="4">
        <BagIcon boxSize="7" />

        <Avatar size="sm" src="https://bit.ly/broken-link" />
      </GridItem>
    </Grid>
  )
}

export default HeaderDesktop
