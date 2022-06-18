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
import { v5 as uuidv5 } from 'uuid'
import { CancelOrderModal } from '../CancelOrderModal'

export const OrderItem = ({
  id,
  items,
  total,
  status,
  addressIdentifier,
  createadAt,
}: OrderItemProps) => {
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
          {status}
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
            <Text>
              {uuidv5(String(id), '1b671a64-40d5-491e-99b0-da01ff1f3341')}
            </Text>
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
            <Text>{addressIdentifier}</Text>
          </Box>
        </Grid>

        <Flex gap="4" alignSelf={[null, null, 'center']}>
          <Button
            w={['100%', null, 'fit-content']}
            size="sm"
            variant="outline"
            colorScheme="info"
            borderRadius="0"
            onClick={onToggle}
          >
            Detalhes
          </Button>
          <CancelOrderModal id={id} />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Divider my="4" />
        <List spacing="4">
          {items.map((item) => (
            <ListItem key={`order-${id}-item-${item.id}`}>
              <Flex mb="4" gap="8">
                <Box boxSize="96px" position="relative">
                  <Image src={item.image} alt="camiseta" />
                  <Badge
                    colorScheme="gray"
                    pos="absolute"
                    right="0"
                    bottom="0"
                    rounded="0"
                  >
                    <Text color="blackAlpha.800">{item.quantity}</Text>
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
                    {item.name}
                  </Text>
                  <Text color="blackAlpha.800">{item.variation}</Text>
                  <Text color="blackAlpha.800">
                    Código de Rastreio: {item.trackingCode || 'indisponível'}
                  </Text>
                  <Text fontWeight="bold">{toCurrencyBRL(item.price)}</Text>
                </Flex>
              </Flex>

              <Divider />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  )
}
