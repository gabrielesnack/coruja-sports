import { Box, Text, Button } from '@chakra-ui/react'
import { toCurrencyBRL } from '../../../commons/helpers/currency'
import { CheckoutFactory } from '../../../commons/thirdparty/MercadoPago'
import { useCartContext } from '../../context/CartContext'
import { AddressModal } from '../AddressModal/component'

export const ResumeCart = () => {
  const { items, totalPrice } = useCartContext()

  const openCheckout = () => {
    const checkout = new CheckoutFactory()
    checkout.create()
    checkout.open()
  }

  return (
    <Box
      d="flex"
      flexDir="column"
      w={['100%', null, null, '30%']}
      h="fit-content"
      borderWidth="1px"
      p="8"
      gap="4"
      bgColor={'whiteAlpha.900'}
    >
      <Text
        alignSelf="center"
        fontSize="2xl"
        fontWeight="bold"
        color="gray.600"
      >
        Resumo
      </Text>

      <Text fontSize="medium" fontWeight="semibold" color="gray.500">
        {items.length} produto{items.length > 1 ? 's' : ''}
      </Text>

      <Text fontSize="2xl" fontWeight="semibold" color="gray.600">
        Total {toCurrencyBRL(totalPrice)}
      </Text>

      <Box d="flex" flexDir="column" gap="2" mb="6">
        <Text
          fontSize="medium"
          fontWeight="semibold"
          color="gray.500"
          whiteSpace="nowrap"
        >
          Endereço de Entrega:
        </Text>

        <AddressModal />
      </Box>

      <Button px="10" colorScheme="primary" onClick={() => openCheckout()}>
        Finalizar Compra
      </Button>
    </Box>
  )
}
