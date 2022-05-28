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
import { useState } from 'react'
import { useCreateOrUpdateCategory } from '../../hooks/useCreateOrUpdateCategory'
import { EditCategoryModalProps } from './interface'

export const EditCategoryModal = ({
  id,
  name,
  onSubmitCallback,
}: EditCategoryModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [category, setCategory] = useState(name)

  const { submit } = useCreateOrUpdateCategory()

  const onSave = async () => {
    const payload = { id, name: category }
    const res = await submit(payload)
    if (res.ok) onSubmitCallback(payload)
  }

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
              <Input
                placeholder="Digite o nome da categoria"
                value={category}
                onChange={(e) => setCategory(e.target?.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Flex justify="space-between" w="100%">
              <Button colorScheme="danger" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="primary" mr={3} px="6" onClick={onSave}>
                Salvar
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
