import NextLink from 'next/link'
import { Box, Text, Button, Flex, Skeleton, Link } from '@chakra-ui/react'
import { useUserContext } from '../../../commons/contexts/userContext'
import { toCurrencyBRL } from '../../../commons/helpers/currency'
import { useCartContext } from '../../context/CartContext'
import { useMakeOrder } from '../../hooks/useMakeOrder'
import { useShipmentPrice } from '../../hooks/useShipmentPrice'
import { AddressModal } from '../AddressModal/component'

export const ResumeCart = () => {
  const { isOnline, isOffline } = useUserContext()

  const { items, totalPrice } = useCartContext()
  const { shipmentPrice, isLoading: isLoadingShipmentPrice } =
    useShipmentPrice()

  const { submit: makeOrder, isLoading } = useMakeOrder()

  const openCheckout = async () => {
    const response = await makeOrder()

    if (response.ok) {
      window.location.href = response.data?.paymentLink as string
    }
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
        {toCurrencyBRL(totalPrice)}
      </Text>

      {isOnline && (
        <>
          <Box d="flex" flexDir="column" gap="2">
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

          <Flex flexDir="column">
            <Text fontSize="medium" fontWeight="semibold" color="gray.500">
              Valor do Frete:
            </Text>
            <Skeleton isLoaded={isLoadingShipmentPrice}>
              <Text fontWeight="medium" color="gray.600">
                {toCurrencyBRL(shipmentPrice || 0)}
              </Text>
            </Skeleton>
          </Flex>

          <Button
            px="10"
            colorScheme="primary"
            onClick={() => openCheckout()}
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Finalizar Compra
          </Button>
        </>
      )}

      {isOffline && (
        <>
          <NextLink href="/profile/me" passHref>
            <Link
              fontWeight="semibold"
              variant="link"
              colorScheme="secondary"
              textAlign="center"
            >
              Para continuar você precisa estar logado clique aqui para entrar.
            </Link>
          </NextLink>
        </>
      )}
    </Box>
  )
}
