import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import InputSearch from '../../../commons/components/InputSearch'
import { HEADER_SIZE } from '../../../commons/config/constants'
import { FilterIcon } from '../../../commons/icons'

export const SearchFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      pos="fixed"
      top={HEADER_SIZE}
      zIndex="5"
      w="100%"
      py="4"
      pl="4"
      pr="10"
      bgColor="white"
      borderWidth="1px"
    >
      <Flex gap="4" alignItems="center">
        <InputSearch></InputSearch>
        <Button leftIcon={<FilterIcon />} variant="unstyled" onClick={onOpen}>
          Filtro
        </Button>

        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
          size="full"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Filtros</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>
            <ModalFooter>
              <Button
                colorScheme="primary"
                mr={3}
                onClick={onClose}
                isFullWidth
              >
                filtrar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  )
}
