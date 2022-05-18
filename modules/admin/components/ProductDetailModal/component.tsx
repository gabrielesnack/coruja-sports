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
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const ProductDetailModal = () => {
  const modal = useDisclosure()

  const showMore = useDisclosure()

  const showPreview = useDisclosure()

  return (
    <Flex justifyContent="center" alignItems="center">
      <Button
        variant="outline"
        colorScheme="info"
        size="xs"
        onClick={modal.onOpen}
        borderRadius="0"
      >
        Ver Detalhes
      </Button>

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
            <Flex flexDir="column" gap="4">
              <Box>
                <Heading fontSize="md" fontWeight="bold">
                  Camiseta do Santos Retrô
                </Heading>
                <Box>
                  <Collapse startingHeight={90} in={showMore.isOpen}>
                    <Text
                      textAlign="justify"
                      noOfLines={showMore.isOpen ? undefined : 4}
                    >
                      De glórias e orgulhos. De moleques levados que desenham
                      magia. Celebre as conquistas do alvinegro praiano dentro e
                      fora dos estádios com a nova Camisa Santos Umbro
                      Masculina. Homenageando a base santista e similar ao
                      modelo que os craques usam nos jogos que mandam na Vila
                      Belmiro, o manto titular da temporada 21/22 é
                      confeccionado com tecido leve e respirável, vestindo os
                      boleiros mais apaixonados com muito conforto e estilo. O
                      novo manto é predominantemente branco com raios que
                      enaltecem a tradição do Peixe em lançar craques ano após
                      ano. Agora quem dá bola é você: garanta já a sua e marque
                      esse golaço. Todo ano troveja na Vila e outro raio cai no
                      mesmo lugar!
                    </Text>
                  </Collapse>
                  <Button
                    size="sm"
                    onClick={showMore.onToggle}
                    mt="1rem"
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
                <Text fontWeight="bold">AliExpress</Text>
              </Box>

              <Box
                d="flex"
                alignItems="center"
                gap="4"
                flexFlow="wrap"
                w="100%"
              >
                <Text fontWeight="semibold">Preço: </Text>
                <Text fontWeight="bold">R$ 170,00</Text>
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
                  <Badge colorScheme="blue">P</Badge>
                  <Badge colorScheme="blue">M</Badge>
                  <Badge colorScheme="blue">G</Badge>
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
                  <Image src="/camiseta.jpeg" alt="camiseta do santos" />
                </Collapse>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex justify="space-between" w="100%">
              <Button colorScheme="danger">Excluir</Button>
              <Button colorScheme="primary" onClick={modal.onClose}>
                Fechar
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}
