import { Box, Flex, Select, Show, Text } from '@chakra-ui/react'
import ClientOnly from '../../../commons/components/ClientOnly'

export const SearchSorting = () => {
  return (
    <ClientOnly>
      <Show above="md">
        <Box d="flex" alignItems="center">
          <Text fontSize="lg" fontWeight="bold" whiteSpace="nowrap" mr="4">
            Ordernar por:
          </Text>
          <Select fontSize="xl" variant="unstyled">
            <Box as="option">menor preço</Box>
            <Box as="option">maior preço</Box>
          </Select>
        </Box>
      </Show>
    </ClientOnly>
  )
}
