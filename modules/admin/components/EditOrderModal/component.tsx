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
} from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import { useRouter } from 'next/router'

export const EditOrderModal = () => {
  const modal = useDisclosure()
  const showMore = useDisclosure()

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
                  <ListItem>
                    <Box alignItems="center" gap="4">
                      <Text fontSize="md" noOfLines={1}>
                        Camiseta do Santos Retrô
                      </Text>
                      <Text fontSize="sm">
                        3 unidades | M | R$ 147,00 | AliExpress
                      </Text>
                    </Box>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <Box alignItems="center" gap="4">
                      <Text fontSize="md" noOfLines={1}>
                        Camiseta do Santos Retrô
                      </Text>
                      <Text fontSize="sm">
                        3 unidades | M | R$ 147,00 | AliExpress
                      </Text>
                    </Box>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <Box alignItems="center" gap="4">
                      <Text fontSize="md" noOfLines={1}>
                        Camiseta do Santos Retrô
                      </Text>
                      <Text fontSize="sm">
                        3 unidades | M | R$ 147,00 | AliExpress
                      </Text>
                    </Box>
                  </ListItem>
                  <Divider />
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
                  Rua Alfredo Salomão, 15 - Teixeiras, Juiz de Fora, MG
                </Text>
              </Flex>

              <Flex gap="2">
                <Text fontWeight="semibold">Valor Total:</Text>
                <Text>R$ 715,00</Text>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex justify="space-between" w="100%">
              <Button colorScheme="danger" size="sm">
                Cancelar Pedido
              </Button>

              <Box minW="180px">
                <Select
                  size="sm"
                  placeholder="Alterar status"
                  options={[
                    { label: 'Pago', value: 'Pago' },
                    { label: 'Pendente', value: 'Pendente' },
                    { label: 'Entregue', value: 'Entregue' },
                    { label: 'Expirado', value: 'Expirado' },
                  ]}
                />
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}
