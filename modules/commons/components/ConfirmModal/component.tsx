import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { ConfirmModalRef, OpenConfirmDialogType } from './interface'

export const ModalConfirm = forwardRef<ConfirmModalRef>((_, ref) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const [data, setData] = useState<OpenConfirmDialogType>()

  const handleOpenModal = () => {
    onOpen()
  }

  const handleOnConfirm = () => {
    data?.onConfirm()
    onClose()
  }

  useImperativeHandle(ref, () => ({
    openDialog: ({ describe, onConfirm }) => {
      setData({ describe, onConfirm })
      handleOpenModal()
    },
  }))

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Você tem certeza?</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} textAlign="justify">
            {data?.describe}
          </ModalBody>

          <ModalFooter justifyContent="space-between">
            <Button variant="outline" colorScheme="danger" onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme="primary" mr={3} onClick={handleOnConfirm}>
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
})
