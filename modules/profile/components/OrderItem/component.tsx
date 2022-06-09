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
  Badge,
} from '@chakra-ui/react'
import format from 'date-fns/format'
import { toCurrencyBRL } from '../../../commons/helpers/currency'
import { OrderItemProps } from './interface'

export const OrderItem = ({ total, createadAt }: OrderItemProps) => {
  const { isOpen, onToggle } = useDisclosure()

  const formattedDate = format(new Date(createadAt), 'dd/MM/yyyy')

  return (
    <Box
      pos="relative"
      bgColor="whiteAlpha.900"
      boxShadow="xl"
      borderWidth="1px"
      px={['4', '10']}
      pt={['10']}
      pb={['6']}
      w="100%"
    >
      <Flex
        flexDir={['column', null, null, 'row']}
        justifyContent={[null, null, null, 'space-between']}
        alignItems={[null, null, null, 'center']}
      >
        <Badge
          pos="absolute"
          top="1rem"
          left={['4', '10']}
          colorScheme="blue"
          px="2"
          fontSize="x-small"
        >
          Pedido em análise
        </Badge>
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
            <Text>{formattedDate}</Text>
          </Box>
          <Box>
            <Text color="blackAlpha.700" fontWeight="semibold">
              Valor Total
            </Text>
            <Text>{toCurrencyBRL(total)}</Text>
          </Box>
          <Box>
            <Text color="blackAlpha.700" fontWeight="semibold">
              Local de Entrega
            </Text>
            <Text>Casa</Text>
          </Box>
        </Grid>

        <Flex gap="4" alignSelf={[null, null, 'center']}>
          <Button
            w={['100%', null, 'fit-content']}
            size="sm"
            variant="outline"
            colorScheme="danger"
            borderRadius="0"
          >
            Cancelar
          </Button>
          <Button
            w={['100%', null, 'fit-content']}
            size="sm"
            variant="outline"
            colorScheme="info"
            borderRadius="0"
            onClick={onToggle}
          >
            Ver Detalhes
          </Button>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Divider my="4" />
        <List spacing="4">
          <ListItem>
            <Flex gap="8">
              <Box boxSize="96px" position="relative">
                <Image src="/camiseta.jpeg" alt="camiseta" />
                <Badge
                  colorScheme="gray"
                  pos="absolute"
                  right="0"
                  bottom="0"
                  rounded="0"
                >
                  <Text color="blackAlpha.800">2</Text>
                </Badge>
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
                <Text color="blackAlpha.800">
                  Código de Rastreio: #HE466U434S52M1AHK
                </Text>
                <Text fontWeight="bold">R$ 79,00</Text>
              </Flex>
            </Flex>
          </ListItem>
          <Divider />
          <ListItem>
            <Flex gap="8">
              <Box boxSize="96px" position="relative">
                <Image src="/camiseta.jpeg" alt="camiseta" />
                <Badge
                  colorScheme="gray"
                  pos="absolute"
                  right="0"
                  bottom="0"
                  rounded="0"
                >
                  <Text color="blackAlpha.800">5</Text>
                </Badge>
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
                <Text color="blackAlpha.800">Tamanho: M</Text>
                <Text color="blackAlpha.800">
                  Código de Rastreio: #HE466U434S52M1AHK
                </Text>
                <Text fontWeight="bold">R$ 79,00</Text>
              </Flex>
            </Flex>
          </ListItem>
        </List>
      </Collapse>
    </Box>
  )
}
