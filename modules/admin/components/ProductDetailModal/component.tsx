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
  Spinner,
} from '@chakra-ui/react'
import { toCurrencyBRL } from '../../../commons/helpers/currency'
import { useProductDetail } from '../../../commons/hooks/useProductDetail'
import { PreviewIcon } from '../../../commons/icons'
import { ProductDetailModalProps } from './interface'

export const ProductDetailModal = ({ id }: ProductDetailModalProps) => {
  const modal = useDisclosure()

  const showMore = useDisclosure()

  const showPreview = useDisclosure()

  const shouldLoadProductDetail = modal.isOpen ? id : undefined
  const { data, isLoading } = useProductDetail(shouldLoadProductDetail)

  return (
    <Flex justifyContent="center" alignItems="center">
      <IconButton
        variant="ghost"
        color="info"
        aria-label="Visualizar Detalhes"
        icon={<PreviewIcon />}
        onClick={modal.onOpen}
      >
        Ver Detalhes
      </IconButton>

      <Modal
        onClose={modal.onClose}
        isOpen={modal.isOpen}
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detalhe do Produto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading && (
              <Flex
                justifyContent="center"
                alignItems="center"
                minHeight="374px"
              >
                <Spinner></Spinner>
              </Flex>
            )}

            {!isLoading && (
              <Flex flexDir="column" gap="4">
                <Box>
                  <Heading fontSize="md" fontWeight="bold">
                    {data?.name}
                  </Heading>
                  <Box d="flex" flexDir="column">
                    <Collapse startingHeight={30} in={showMore.isOpen}>
                      <Text
                        textAlign="justify"
                        noOfLines={showMore.isOpen ? undefined : 2}
                      >
                        {data?.description}
                      </Text>
                    </Collapse>
                    <Button
                      alignSelf="center"
                      size="sm"
                      onClick={showMore.onToggle}
                      mt="1"
                      colorScheme="info"
                      variant="link"
                    >
                      {showMore.isOpen ? 'esconder' : 'ver mais'}
                    </Button>
                  </Box>
                </Box>

                <Box
                  d="flex"
                  alignItems="center"
                  gap="4"
                  flexFlow="wrap"
                  w="100%"
                >
                  <Text fontWeight="semibold">Fornecedor: </Text>
                  {/* <Text fontWeight="bold">{data?.provider}</Text> */}
                </Box>

                <Box
                  d="flex"
                  alignItems="center"
                  gap="4"
                  flexFlow="wrap"
                  w="100%"
                >
                  <Text fontWeight="semibold">Preço: </Text>
                  <Text fontWeight="bold">
                    {toCurrencyBRL(data?.price || 0)}
                  </Text>
                </Box>

                <Box
                  d="flex"
                  alignItems="center"
                  gap="4"
                  flexFlow="wrap"
                  w="100%"
                >
                  <Text fontWeight="semibold">Categorias: </Text>
                  <Flex gap="4" flexFlow="wrap">
                    <Badge colorScheme="blue">La Liga</Badge>
                    <Badge colorScheme="blue">Brasileirão</Badge>
                  </Flex>
                </Box>

                <Box
                  d="flex"
                  alignItems="center"
                  gap="4"
                  flexFlow="wrap"
                  w="100%"
                >
                  <Text fontWeight="semibold">Tamanhos: </Text>
                  <Flex gap="4" flexFlow="wrap">
                    {data?.sizes.map((e) => (
                      <Badge
                        colorScheme="blue"
                        key={`product-${id}-size-${e.id}`}
                      >
                        {e.name}
                      </Badge>
                    ))}
                  </Flex>
                </Box>

                <Box w="100%">
                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme="secondary"
                    mb="4"
                    onClick={showPreview.onToggle}
                  >
                    Visualizar Produto
                  </Button>
                  <Collapse in={showPreview.isOpen}>
                    <Image src={data?.images[0].url} alt={data?.name} />
                  </Collapse>
                </Box>
              </Flex>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  )
}
