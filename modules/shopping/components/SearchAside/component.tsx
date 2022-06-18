import {
  Box,
  Checkbox,
  CheckboxGroup,
  Heading,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react'
import ClientOnly from '../../../commons/components/ClientOnly'
import { useSearchContext } from '../../context/SearchContext'
import { SearchAsideProps } from './interface'

export const SearchAside = ({ categories, sizes }: SearchAsideProps) => {
  const { category, changeCategory, variations, changeVariations } =
    useSearchContext()

  console.log({ category, variations })

  const handleCategory = (id: string) => {
    changeCategory && changeCategory(id)
  }

  const handleSizes = (sizes: string[]) => {
    changeVariations && changeVariations(sizes)
  }

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

      <ClientOnly>
        <RadioGroup onChange={(v) => handleCategory(v)} value={category}>
          {categories.map((item) => (
            <Box key={`categoria-${item.id}`} mb="1">
              <Radio value={String(item.id)}>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                  {item.name}
                </Text>
              </Radio>
            </Box>
          ))}
        </RadioGroup>
      </ClientOnly>

      <Heading my="6" fontSize="lg" textAlign="center">
        Tamanhos
      </Heading>

      <ClientOnly>
        <CheckboxGroup
          onChange={(v) => handleSizes(v as string[])}
          value={variations}
        >
          {sizes.map((item) => (
            <Box key={`size-${item.id}`} mb="1">
              <Checkbox value={String(item.id)}>
                <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                  {item.name}
                </Text>
              </Checkbox>
            </Box>
          ))}
        </CheckboxGroup>
      </ClientOnly>
    </Box>
  )
}
