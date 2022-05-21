import { Flex, Input } from '@chakra-ui/react'
import { OrderItem } from '../OrderItem/component'

export const MyOrders = () => {
  return (
    <Flex flexDir="column" gap="2">
      <Input
        placeholder="Buscar Pedido"
        w={['100%', null, 'fit-content']}
        alignSelf="flex-end"
        my="4"
      />

      <OrderItem />
      <OrderItem />
      <OrderItem />
    </Flex>
  )
}
