import {
  Badge,
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
  RadioGroup,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PlusIcon } from '../../../commons/icons'
import { useAddress } from '../../../profile/hooks/useAddress'
import { useCartContext } from '../../context/CartContext'

export const AddressModal = () => {
  const router = useRouter()
  const { isOpen, onClose, onOpen } = useDisclosure()

  const { updateShipment, shipmentId } = useCartContext()
  const { addresses } = useAddress()

  const [radioValue, setRadioValue] = useState<number>()

  const currentAddress = addresses?.data.find((e) => e.id === shipmentId)
  const previewAddress = currentAddress
    ? `${currentAddress?.street}, ${currentAddress?.number}`
    : 'Nenhum Selecionado'

  const onSave = () => {
    onClose()
    updateShipment && updateShipment(radioValue as NonNullable<number>)
  }

  return (
    <>
      <Button
        variant="outline"
        colorScheme="secondary"
        w="100%"
        size="sm"
        onClick={onOpen}
      >
        {previewAddress}
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

            <RadioGroup
              onChange={(val) => setRadioValue(Number(val))}
              value={radioValue}
            >
              <List d="flex" flexDir="column" gap="3">
                {addresses?.data.map((e) => (
                  <ListItem
                    key={e.id}
                    pos="relative"
                    borderBottom="1px solid #e2e2e2"
                    py="2"
                  >
                    <Radio value={e.id}>
                      <Box>
                        <Text fontSize="sm" fontWeight="semibold">
                          {e.street}, {e.number}
                        </Text>
                        <Text fontSize="xs">
                          CEP: {e.zipCode} - {e.city} - {e.state.value}
                        </Text>
                        <Badge
                          fontSize="x-small"
                          colorScheme="blue"
                          pos="absolute"
                          top="20%"
                          right="0"
                        >
                          {e.alias}
                        </Badge>
                      </Box>
                    </Radio>
                  </ListItem>
                ))}
              </List>
            </RadioGroup>

            <Button
              leftIcon={<PlusIcon />}
              variant="link"
              colorScheme="primary"
              onClick={() => router.push('/profile/me')}
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
            <Button colorScheme="primary" px="8" onClick={onSave}>
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
