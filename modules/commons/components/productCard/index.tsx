import { StarIcon } from '@chakra-ui/icons'
import { Box, Image, Badge } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { toCurrencyBRL } from '../../helpers/currency'
import { ProductProps } from './interface'
import { BoxWrapperProps } from './props'

function ProductCard({ name, price, variations, images }: ProductProps) {
  const router = useRouter()

  const size = (variations && variations[0].Tamanho) || []
  const formattedPrice = toCurrencyBRL(price || 0)
  const imageURL = images[0]
  const imageAlt = `imagem da ${name}`

  const property = {
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box {...BoxWrapperProps} onClick={() => router.push('product/santos')}>
      <Box w="100%" d="flex" justifyContent="center">
        <Image
          src={imageURL}
          alt={imageAlt}
          w={imageURL ? '100%' : '50%'}
          pt={!imageURL ? '16' : 'unset'}
          fallbackSrc="/no-pictures.png"
        />
      </Box>

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          {/* <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge> */}
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            Tamanhos {size.join(', ').toUpperCase()}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>

        <Box>
          {formattedPrice}
          {/* <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box> */}
        </Box>

        {/* <Box display="flex" mt="2" alignItems="center">
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
        </Box> */}
      </Box>
    </Box>
  )
}

export default ProductCard
