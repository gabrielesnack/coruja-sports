import { Box, Heading, Text } from '@chakra-ui/react'
import { SearchAsideProps } from './interface'

export const SearchAside = ({ categories }: SearchAsideProps) => {
  return (
    <Box d={['none', null, null, 'initial']} mr="12">
      <Heading fontSize="lg" mb="6">
        Categoria
      </Heading>

      {categories.map((item) => (
        <Text key={`categoria-${item.id}`}>{item.name}</Text>
      ))}

      <Heading my="6" fontSize="lg">
        Tamanhos
      </Heading>

      {['P', 'PP', 'M', 'G', 'GG'].map((item, idx) => (
        <Text key={`categoria-${idx}`}>{item}</Text>
      ))}
    </Box>
  )
}
