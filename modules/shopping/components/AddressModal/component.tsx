import {
  Box,
  Button,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { PlusIcon } from '../../../commons/icons'

export const AddressModal = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button
        variant="outline"
        colorScheme="secondary"
        w="100%"
        size="sm"
        onClick={onOpen}
      >
        Rua Domingos Francisco de Sousa
      </Button>

      <Modal
        blockScrollOnMount={true}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Escolha o endereço de entrega</ModalHeader>
          <ModalCloseButton />

          <ModalBody d="flex" flexDir="column" gap="6" mb="4">
            <Text fontWeight="semibold">Em um dos seus endereços</Text>

            <List d="flex" flexDir="column" gap="3">
              <ListItem borderBottom="1px solid #e2e2e2" py="2">
                <Radio value="1">
                  <Box>
                    <Text fontSize="sm" fontWeight="semibold">
                      Rua Arco-Íris, 88
                    </Text>
                    <Text fontSize="xs">CEP: 69316-055 - Boa Vista - RR</Text>
                  </Box>
                </Radio>
              </ListItem>
              <ListItem borderBottom="1px solid #e2e2e2" py="2">
                <Radio value="1">
                  <Box>
                    <Text fontSize="sm" fontWeight="semibold">
                      Rua Moacyr Artemes Menegatti, 37
                    </Text>
                    <Text fontSize="xs">CEP: Colatina - Colatina - ES</Text>
                  </Box>
                </Radio>
              </ListItem>
              <ListItem borderBottom="1px solid #e2e2e2" py="2">
                <Radio value="1">
                  <Box>
                    <Text fontSize="sm" fontWeight="semibold">
                      Rua Osmundo Farias, 115
                    </Text>
                    <Text fontSize="xs">CEP: 59147-415 - Parnamirim - RN</Text>
                  </Box>
                </Radio>
              </ListItem>
            </List>

            <Button
              leftIcon={<PlusIcon />}
              variant="link"
              colorScheme="primary"
            >
              Adicionar um novo endereço
            </Button>
          </ModalBody>

          <ModalFooter justifyContent="space-between">
            <Button
              colorScheme="danger"
              variant="outline"
              px="6"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button colorScheme="primary" px="8">
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
