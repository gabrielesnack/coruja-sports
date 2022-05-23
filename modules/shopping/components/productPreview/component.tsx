import { Box, Image, Show } from '@chakra-ui/react'
import { useProductDetail } from '../../../commons/hooks/useProductDetail'
import { ProductPreviewProps } from './interface'

export const ProductPreview = ({ id }: ProductPreviewProps) => {
  const { data } = useProductDetail(id)
  const image = data?.images[0].url

  return (
    <Show above="lg">
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        w="560px"
        maxW="560px"
        h="min-content"
        p="2"
        bgColor="whiteAlpha.900"
        borderWidth="1px"
        borderRadius="lg"
      >
        <Box w={image ? undefined : '33%'}>
          <Image src={image} fallbackSrc="/no-pictures.png" alt="camiseta" />
        </Box>
      </Box>
    </Show>
  )
}
