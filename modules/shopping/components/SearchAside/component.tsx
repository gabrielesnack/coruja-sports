import { Box, Checkbox, Heading, Radio, Text } from '@chakra-ui/react'
import { SearchAsideProps } from './interface'

export const SearchAside = ({ categories }: SearchAsideProps) => {
  return (
    <Box
      d={['none', null, null, 'initial']}
      p="6"
      mr="6"
      minW="260px"
      h="min-content"
      bgColor="whiteAlpha.900"
      borderRadius="sm"
      borderWidth="1px"
      boxShadow="sm"
    >
      <Heading fontSize="lg" mb="6" textAlign="center">
        Categorias
      </Heading>

      {categories.map((item) => (
        <Box key={`categoria-${item.id}`} mb="1">
          <Radio>
            <Text fontSize="sm" fontWeight="semibold" color="gray.600">
              {item.name}
            </Text>
          </Radio>
        </Box>
      ))}

      <Heading my="6" fontSize="lg" textAlign="center">
        Tamanhos
      </Heading>

      {['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG'].map((item, idx) => (
        <Box key={`categoria-${idx}`} mb="1">
          <Checkbox>
            <Text fontSize="sm" fontWeight="semibold" color="gray.600">
              {item}
            </Text>
          </Checkbox>
        </Box>
      ))}
    </Box>
  )
}
