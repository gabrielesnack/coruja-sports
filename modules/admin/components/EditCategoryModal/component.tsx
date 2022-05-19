import { EditIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'

export const EditCategoryModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        size="sm"
        variant="ghost"
        color="info"
        aria-label="editar"
        icon={<EditIcon />}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Categoria</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome da Categoria</FormLabel>
              <Input placeholder="Digite o nome da categoria" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Flex justify="space-between" w="100%">
              <Button colorScheme="danger" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="primary" mr={3} px="6">
                Salvar
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
