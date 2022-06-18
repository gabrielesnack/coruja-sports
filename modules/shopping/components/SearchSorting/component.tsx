import { Box, Flex, Select, Show, Text } from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import ClientOnly from '../../../commons/components/ClientOnly'
import { useSearchContext } from '../../context/SearchContext'

export const SearchSorting = () => {
  const { sortPrice, changeSortPrice } = useSearchContext()

  const hasSort = !!sortPrice

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) return
    changeSortPrice && changeSortPrice(e.target.value)
  }

  return (
    <ClientOnly>
      <Show above="md">
        <Box d="flex" alignItems="center">
          <Text fontSize="lg" fontWeight="bold" whiteSpace="nowrap" mr="4">
            Ordernar por:
          </Text>
          <Select
            fontSize="xl"
            variant="unstyled"
            value={sortPrice}
            onChange={handleChange}
          >
            <Box as="option">padrão</Box>
            <Box as="option" value="asc">
              menor preço
            </Box>
            <Box as="option" value="desc">
              maior preço
            </Box>
          </Select>
        </Box>
      </Show>
    </ClientOnly>
  )
}
