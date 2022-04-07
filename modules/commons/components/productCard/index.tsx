import { StarIcon } from '@chakra-ui/icons'
import { Box, Image, Badge } from '@chakra-ui/react'
import { BoxWrapperProps } from './props'

function ProductCard() {
  const property = {
    imageUrl: '/camiseta.jpeg',
    imageAlt: 'Imagem da camisa do santos',
    title: 'Camiseta do Santos',
    formattedPrice: 'R$1,900.00',
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box {...BoxWrapperProps}>
      <Image src={property.imageUrl} alt={property.imageAlt} w="100%" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            Tamanhos P, M, G
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductCard
