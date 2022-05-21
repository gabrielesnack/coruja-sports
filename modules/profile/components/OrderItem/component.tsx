import {
  Box,
  Button,
  Collapse,
  Divider,
  Flex,
  List,
  ListItem,
  Text,
  useDisclosure,
  Image,
  Grid,
} from '@chakra-ui/react'

export const OrderItem = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box
      bgColor="whiteAlpha.900"
      boxShadow="xl"
      borderWidth="1px"
      p={['4', '8']}
      w="100%"
    >
      <Flex
        flexDir={['column', null, null, 'row']}
        justifyContent={[null, null, null, 'space-between']}
        alignItems={[null, null, null, 'center']}
      >
        <Grid
          templateColumns={[
            '1fr 1fr',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(4, 1fr)',
          ]}
          gap={['4', null, null, '20']}
          mb="4"
        >
          <Box>
            <Text color="blackAlpha.700" fontWeight="semibold">
              Código do Pedido
            </Text>
            <Text>#A8S123MA897</Text>
          </Box>
          <Box>
            <Text color="blackAlpha.700" fontWeight="semibold">
              Data da Solicitação
            </Text>
            <Text>03/05/2022</Text>
          </Box>
          <Box>
            <Text color="blackAlpha.700" fontWeight="semibold">
              Valor Total
            </Text>
            <Text>R$ 179,00</Text>
          </Box>
          <Box>
            <Text color="blackAlpha.700" fontWeight="semibold">
              Local de Entrega
            </Text>
            <Text>Casa</Text>
          </Box>
        </Grid>

        <Button
          w={['100%', null, 'fit-content']}
          alignSelf={[null, null, 'center']}
          size="sm"
          variant="outline"
          colorScheme="info"
          borderRadius="0"
          onClick={onToggle}
        >
          Ver Detalhes
        </Button>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Divider my="4" />
        <List spacing="4">
          <ListItem>
            <Flex gap="8">
              <Box boxSize="96px">
                <Image src="/camiseta.jpeg" alt="camiseta" />
              </Box>

              <Flex
                flexDir="column"
                justifyContent="space-between"
                maxW="calc(100% - 140px)"
              >
                <Text
                  color="blue.600"
                  fontWeight="semibold"
                  noOfLines={1}
                  pr="1"
                >
                  Camiseta do santos retrô
                </Text>
                <Text color="blackAlpha.800">Tamanho: P</Text>
                <Text color="blackAlpha.800">Quantidade: 3</Text>
                <Text fontWeight="bold">R$ 79,00</Text>
              </Flex>
            </Flex>
          </ListItem>
          <Divider />
          <ListItem>
            <Flex gap="8">
              <Box boxSize="96px">
                <Image src="/camiseta.jpeg" alt="camiseta" />
              </Box>

              <Flex
                flexDir="column"
                justifyContent="space-between"
                maxW="calc(100% - 140px)"
              >
                <Text
                  color="blue.600"
                  fontWeight="semibold"
                  noOfLines={1}
                  pr="1"
                >
                  Camiseta do santos retrô
                </Text>
                <Text color="blackAlpha.800">Tamanho: P</Text>
                <Text color="blackAlpha.800">Quantidade: 3</Text>
                <Text fontWeight="bold">R$ 79,00</Text>
              </Flex>
            </Flex>
          </ListItem>
        </List>
      </Collapse>
    </Box>
  )
}
