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
} from '@chakra-ui/react'
import { HEADER_SIZE } from '../../config/constants'
import InputSearch from '../InputSearch'
import { championships, tShirtModels } from './props'

export function MobileContent() {
  const { isOpen: isOpenSectionModels, onToggle: onToggleModels } =
    useDisclosure()
  const { isOpen: isOpenSectionChampions, onToggle: onToggleChampions } =
    useDisclosure()

  return (
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
      <Flex mt="6" mb="6">
        <InputSearch />
      </Flex>

      <Text fontWeight="semibold" mb="6" onClick={onToggleChampions}>
        Campeonatos <ChevronDownIcon />
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

      <Text fontWeight="semibold" mt="4" mb="6" onClick={onToggleModels}>
        Modelos <ChevronDownIcon />
      </Text>

      <Collapse in={isOpenSectionModels} animateOpacity>
        <List d="flex" flexDirection="column" gap="6">
          {tShirtModels.map((e, idx) => (
            <ListItem key={`tshirtmodels-${idx}`}>
              <Link>{e}</Link>
            </ListItem>
          ))}
        </List>
      </Collapse>

      <Flex h="100%" flexDirection="column" justifyContent="flex-end" gap="4">
        <Button colorScheme="primary">Entrar</Button>
        <Button colorScheme="secondary" variant="outline">
          Criar Conta
        </Button>
      </Flex>
    </Flex>
  )
}
