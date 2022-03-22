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
import { BagIcon, UserIcon } from '../../icons/'

function HeaderDesktop() {
  return (
    <Grid
      w="100%"
      h="100%"
      templateColumns={['.1fr .1fr .6fr .7fr']}
      py="3"
      px="4"
      gap="4"
    >
      <GridItem>
        <Image src="corujasports.png" h="35px" />
      </GridItem>

      <GridItem>
        <List d="flex" h="100%" alignItems={'center'} pr="6">
          <ListItem px="2">
            <Link>Camisetas</Link>
          </ListItem>
          <ListItem>
            <Link>Tênis</Link>
          </ListItem>
        </List>
      </GridItem>

      <GridItem>
        <InputGroup size="sm">
          <Input type="text" placeholder="O que você está buscando?" />
          <InputRightAddon pointerEvents="none" children={<SearchIcon />} />
        </InputGroup>
      </GridItem>

      <GridItem d="flex" justifyContent="flex-end" alignItems="center" gap="4">
        <BagIcon boxSize="5" />

        <Avatar size="xs" src="https://bit.ly/broken-link" />
      </GridItem>
    </Grid>
  )
}

export default HeaderDesktop
