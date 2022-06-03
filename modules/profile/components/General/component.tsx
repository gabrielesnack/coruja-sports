import { Grid, Input, Box, Text, Flex, Button } from '@chakra-ui/react'

export const GeneralInformation = () => {
  return (
    <Flex flexDir="column" gap="12">
      <Grid templateColumns={['1fr', null, '1fr 1fr']} gap="6" pt="8">
        <Box d="flex" flexDir="column" gap="2">
          <Text fontSize="sm" fontWeight="semibold" color="gray.500">
            Nome Completo
          </Text>
          <Input defaultValue="Nilton Antune da Silva" />
        </Box>

        <Box d="flex" flexDir="column" gap="2">
          <Text fontSize="sm" fontWeight="semibold" color="gray.500">
            Data de Nascimento
          </Text>
          <Input defaultValue="13/03/1997" />
        </Box>

        <Box d="flex" flexDir="column" gap="2">
          <Text fontSize="sm" fontWeight="semibold" color="gray.500">
            CPF
          </Text>
          <Input defaultValue="057.490.550-27" />
        </Box>

        <Box d="flex" flexDir="column" gap="2">
          <Text fontSize="sm" fontWeight="semibold" color="gray.500">
            RG
          </Text>
          <Input defaultValue="43.796.750-5" />
        </Box>
      </Grid>

      <Button
        w={['100%', null, 'fit-content']}
        colorScheme="primary"
        alignSelf="flex-end"
        px="10"
      >
        Salvar
      </Button>
    </Flex>
  )
}
