import { EditIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Box,
  Badge,
  Collapse,
  Image,
  IconButton,
  UnorderedList,
  ListItem,
  Divider,
  List,
  useToast,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Select } from 'chakra-react-select'
import { useRouter } from 'next/router'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { toCurrencyBRL } from '../../../commons/helpers/currency'
import { useStatus } from '../../../commons/hooks/useStatus'
import { OptionType } from '../../../commons/types'
import { OrderType } from '../../hooks/useOrders/interface'
import { useUpdateOrder } from '../../hooks/useUpdateOrder'
import {
  CodeTrackEditable,
  CodeTrackEditableWrapper,
} from '../CodeTrackEditable'
import { EditModalProps, EditOrderInputs } from './interface'
import { schemaValidation } from './props'

export const EditOrderModal = ({
  id,
  items,
  address,
  statusId,
  total,
}: EditModalProps) => {
  const toaster = useToast()
  const modal = useDisclosure()
  const showMore = useDisclosure()

  const { listStatus } = useStatus()
  const { submit } = useUpdateOrder()

  const { control, handleSubmit } = useForm<EditOrderInputs>({
    resolver: yupResolver(schemaValidation(items.length - 1)),
    defaultValues: {
      status: listStatus.find(
        (e) => e.value === String(statusId)
      ) as OptionType<string>,
      items: items.map((item) => ({ id: item.id, code: item.trackingCode })),
    },
  })
  const {} = useFieldArray({
    control,
    name: 'items',
  })

  const onSave = () => {
    handleSubmit(
      (data) => {
        submit({ id, ...data })
      },
      (fields) => {
        const err = Object.keys(fields)
        const message = err.includes('status')
          ? 'Você precisa definir o status do pedido'
          : 'Você precisa preencher todos os códigos de rastreio'

        toaster({
          title: 'Não foi possível alterar o pedido',
          description: message,
          status: 'error',
          isClosable: true,
          position: 'top-right',
          variant: 'left-accent',
          duration: 2000,
        })
      }
    )()
  }

  return (
    <Flex justifyContent="center" alignItems="center">
      <IconButton
        size="sm"
        variant="ghost"
        color="info"
        aria-label="editar"
        icon={<EditIcon />}
        onClick={modal.onOpen}
      />

      <Modal
        onClose={modal.onClose}
        isOpen={modal.isOpen}
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detalhes do Pedido</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir="column" gap="4">
              <Heading fontSize="md" fontWeight="semibold">
                Items:
              </Heading>
              <Collapse startingHeight={120} in={showMore.isOpen}>
                <List d="flex" flexDir="column" gap="4" px="2">
                  {items.map((e) => (
                    <ListItem key={`item-${id}-${e.id}`}>
                      <Box alignItems="center" gap="4" mb="2">
                        <Text fontSize="md" noOfLines={1}>
                          {e.name}
                        </Text>
                        <Text fontSize="sm">
                          {e.quantity} unidades | {e.variation} |{' '}
                          {toCurrencyBRL(e.price)}
                        </Text>
                        <Controller
                          control={control}
                          name={`items.${e.id}`}
                          render={({ field }) => (
                            <CodeTrackEditableWrapper
                              onSubmit={(code) =>
                                field.onChange({ id: e.id, code })
                              }
                              defaultValue={e.trackingCode}
                            >
                              <CodeTrackEditable />
                            </CodeTrackEditableWrapper>
                          )}
                        />
                      </Box>
                      <Divider />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
              <Button
                size="sm"
                onClick={showMore.onToggle}
                variant="link"
                colorScheme="info"
              >
                {showMore.isOpen ? 'esconder' : 'ver mais'}
              </Button>

              <Flex flexDir="column">
                <Text fontWeight="semibold">Endereço de Entrega:</Text>
                <Text>
                  {address.street}, {address.number} - {address.district},{' '}
                  {address.city}, {address.state}
                </Text>
              </Flex>

              <Flex gap="2">
                <Text fontWeight="semibold">Valor Total:</Text>
                <Text>{toCurrencyBRL(total)}</Text>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex justify="space-between" w="100%">
              <Box minW="180px">
                <Controller
                  control={control}
                  name="status"
                  render={({ field }) => (
                    <Select
                      size="sm"
                      placeholder="Alterar status"
                      defaultValue={field.value}
                      options={listStatus}
                      onChange={(e) => field.onChange(e?.value)}
                    />
                  )}
                />
              </Box>
              <Button colorScheme="primary" onClick={onSave}>
                Salvar
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}
