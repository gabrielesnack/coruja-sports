import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Select,
  Button,
  useDisclosure,
  Collapse,
  useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toCurrencyBRL } from '../../../commons/helpers/currency'
import { useProductDetail } from '../../../commons/hooks/useProductDetail'
import { ProductDetailType } from '../../../commons/hooks/useProductDetail/interface'
import { useCartContext } from '../../context/CartContext'
import { ProductDetailProps } from './inteface'

export const ProductDetail = ({ id }: ProductDetailProps) => {
  const router = useRouter()
  const toast = useToast()

  const showMore = useDisclosure()

  const [quantity, setQuantity] = useState<number>(1)
  const [size, setSize] = useState<number>()

  const { add } = useCartContext()
  const { data } = useProductDetail(id)
  const product = data as ProductDetailType

  useEffect(() => {
    data && setSize(data?.sizes[0].id)
  }, [data])

  const handleAddItem = () => {
    const productProviderVariationId = product.sizes.find(
      (e) => e.id == size
    )?.productProviderVariationId

    if (!productProviderVariationId) return

    if (add) {
      add({ id: productProviderVariationId, product, quantity })
      toast({
        title: 'item adicionado ao carrinho.',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'bottom',
        variant: 'left-accent',
      })
    }
  }

  return (
    <Box
      d="flex"
      flexDir="column"
      justifyContent="start"
      minW={['100%', null, '450px']}
      maxW={[null, null, '560px', 'auto']}
      px="10"
      pt="4"
      pb="10"
      gap="4"
      borderWidth="1px"
      borderRadius="lg"
      bgColor="whiteAlpha.900"
    >
      <Flex h="100%" flexDir="column" justifyContent="space-between" gap="10">
        <Flex flexDir="column" gap="4">
          <Box d="flex" flexDir="column" gap="1">
            <Heading mt="4" fontSize="2xl" fontWeight="semibold">
              {product.name}
            </Heading>

            <Collapse in={showMore.isOpen} animateOpacity startingHeight={40}>
              <Text textAlign="justify" fontSize="sm">
                {product.description}
              </Text>
            </Collapse>

            <Button
              alignSelf="center"
              variant="link"
              size="sm"
              colorScheme="info"
              onClick={showMore.onToggle}
            >
              ver mais
            </Button>
          </Box>

          <Text fontSize="3xl" fontWeight="bold">
            {toCurrencyBRL(product.price)}
          </Text>

          <Box
            borderWidth="1px"
            borderRadius="md"
            boxShadow="0 .15rem 2rem 0 rgb(136 152 170 / 15%)"
          >
            <Image
              borderRadius="md"
              src={product.images[0]?.url}
              alt="camiseta"
              d={[null, null, null, 'none']}
            />
          </Box>

          <Box d="flex" alignItems="center" gap="4" color="blackAlpha.700">
            <Text fontSize="lg">Tamanho: </Text>

            <Select
              size="md"
              onChange={(e) => setSize(Number(e.target?.value))}
            >
              {product.sizes.map((size, idx) => (
                <Box
                  as="option"
                  key={`size-${size.id}`}
                  value={size.id}
                  defaultChecked={idx === 0}
                >
                  {size.name}
                </Box>
              ))}
            </Select>
          </Box>

          <Box d="flex" alignItems="center" gap="4" color="blackAlpha.700">
            <Text fontSize="lg">Quantidade: </Text>

            <Select
              size="md"
              onChange={(e) => setQuantity(Number(e.target?.value))}
            >
              {new Array(5).fill(1).map((_, idx) => (
                <Box as="option" key={`size-option-${idx}`} value={idx + 1}>
                  {idx + 1}
                </Box>
              ))}
            </Select>
          </Box>
        </Flex>

        <Box d="flex" flexDir="column" alignSelf="flex-end" w="100%" gap="4">
          <Button colorScheme="primary" onClick={() => router.push('/cart')}>
            Visualizar carrinho
          </Button>
          <Button
            colorScheme="secondary"
            variant="outline"
            onClick={handleAddItem}
          >
            Adicionar ao carrinho
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}
