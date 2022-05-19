import { Box, Image, Flex } from '@chakra-ui/react'

export const ProductPreview = () => (
  <Box
    p="2"
    bgColor="whiteAlpha.900"
    borderWidth="1px"
    borderRadius="lg"
    d={['none', null, null, 'initial']}
  >
    <Box borderWidth="1px" maxW="560px" mb="2">
      <Image src="/camiseta.jpeg" alt="camiseta" />
    </Box>
    {/* <Flex gap="1" d={['none', null, null, 'flex']}>
      <Box
        borderWidth="1px"
        borderRadius="md"
        w="64px"
        h="64px"
        cursor="pointer"
      >
        <Image src="/camiseta.jpeg" borderRadius="md" />
      </Box>
      <Box
        borderWidth="1px"
        borderRadius="md"
        w="64px"
        h="64px"
        cursor="pointer"
      >
        <Image src="/camiseta.jpeg" borderRadius="md" />
      </Box>
      <Box
        borderWidth="1px"
        borderRadius="md"
        w="64px"
        h="64px"
        cursor="pointer"
      >
        <Image src="/camiseta.jpeg" borderRadius="md" />
      </Box>
      <Box
        borderWidth="1px"
        borderRadius="md"
        w="64px"
        h="64px"
        cursor="pointer"
      >
        <Image src="/camiseta.jpeg" borderRadius="md" />
      </Box>
    </Flex> */}
  </Box>
)
