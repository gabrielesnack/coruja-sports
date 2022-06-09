import { Flex, Input } from '@chakra-ui/react'
import { useOrders } from '../../hooks/useOrders'
import { OrderItem } from '../OrderItem/component'

export const MyOrders = () => {
  const { orders } = useOrders()

  return (
    <Flex flexDir="column" gap="2">
      <Input
        placeholder="Buscar Pedido"
        w={['100%', null, 'fit-content']}
        alignSelf="flex-end"
        my="4"
      />

      {orders?.map((props) => (
        <OrderItem key={`order-${props.id}`} {...props} />
      ))}
    </Flex>
  )
}
