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
import { forwardRef, useImperativeHandle, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Field } from '../../../commons/components/Field'
import { TrashIcon } from '../../../commons/icons'
import { useCancelOrder } from '../../hooks/useCancelOrder'

export const CancelOrderModal = ({ id }: { id: number }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { submit: cancel } = useCancelOrder()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ reason: string }>()

  const onConfirm = () => [
    handleSubmit(({ reason }) => {
      cancel(id, reason)
    })(),
  ]

  return (
    <>
      <IconButton
        variant="ghost"
        color="danger"
        size="sm"
        aria-label="cancelar"
        icon={<TrashIcon />}
        onClick={onOpen}
      >
        Cancelar
      </IconButton>

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
            <FormControl flexDir="column">
              <FormLabel>Motivo do cancelamento</FormLabel>
              <Field
                isInvalid={!!errors.reason}
                errMsg={errors.reason?.message}
              >
                <Input
                  placeholder="ex: os produtos estão Inválidos."
                  {...register('reason', { required: 'Campo obrigatório' })}
                />
              </Field>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="space-between">
            <Button variant="outline" colorScheme="danger" onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme="primary" onClick={onConfirm}>
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
