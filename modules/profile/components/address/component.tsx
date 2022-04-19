import {
  Grid,
  Input,
  Box,
  Text,
  Flex,
  Button,
  GridItem,
  Select,
} from '@chakra-ui/react'

export const Address = () => {
  return (
    <Flex flexDir="column">
      <Box
        d="flex"
        alignSelf="end"
        flexDir="column"
        gap="2"
        w={['100%', null, 'fit-content']}
        mt={['6', null, '0']}
      >
        <Select fontSize="small" fontWeight="semibold" color="secondary">
          <option value="3" defaultChecked>
            Novo Endereço
          </option>
          <option value="1">Minha Casa</option>
          <option value="2">Meu Apartamento</option>
        </Select>
      </Box>

      <Grid templateColumns={['1fr', null, '1fr 1fr 1fr']} gap="6" pt="8">
        <GridItem colSpan={3}>
          <Box d="flex" flexDir="column" gap="2" w={[null, null, '50%', '32%']}>
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">
              Tag de identificação
            </Text>
            <Input placeholder="e.g minha casa, meu apartmento" />
          </Box>
        </GridItem>

        <GridItem colSpan={[3, 3, 2, 1]}>
          <Box d="flex" flexDir="column" gap="2">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">
              CEP
            </Text>

            <Flex gap="4" alignItems="center">
              <Input defaultValue="58068-610" />

              <Button
                colorScheme="secondary"
                variant="outline"
                size="sm"
                px="4"
                borderRadius="sm"
              >
                Buscar
              </Button>
            </Flex>
          </Box>
        </GridItem>

        <GridItem colSpan={[3, null, 2]}>
          <Box d="flex" flexDir="column" gap="2">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">
              Endereço
            </Text>
            <Input defaultValue="Rua Profeta Natã" />
          </Box>
        </GridItem>

        <GridItem colSpan={[3, 3, 1]}>
          <Box d="flex" flexDir="column" gap="2">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">
              Bairro
            </Text>
            <Input defaultValue="Gramame" />
          </Box>
        </GridItem>

        <GridItem colSpan={[3, 3, 1]}>
          <Box d="flex" flexDir="column" gap="2">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">
              Cidade
            </Text>
            <Input defaultValue="João Pessoa" />
          </Box>
        </GridItem>

        <GridItem colSpan={[3, 3, 1]}>
          <Box d="flex" flexDir="column" gap="2">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">
              Estado
            </Text>
            <Input defaultValue="Paraiba" />
          </Box>
        </GridItem>
        <GridItem colSpan={[3, 3, 1]}>
          <Box d="flex" flexDir="column" gap="2">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">
              Número
            </Text>
            <Input defaultValue="133" />
          </Box>
        </GridItem>
        <GridItem colSpan={[3, 3, 1]}>
          <Box d="flex" flexDir="column" gap="2">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">
              Complemento
            </Text>
            <Input defaultValue="Casa" />
          </Box>
        </GridItem>
      </Grid>

      <Flex
        flexDir={['column', null, 'row']}
        justifyContent={[null, null, 'flex-end']}
        gap="8"
        mt="10"
      >
        <Button
          w={['100%', null, 'fit-content']}
          colorScheme="danger"
          variant="outline"
          px="10"
        >
          Excluir
        </Button>

        <Button w={['100%', null, 'fit-content']} colorScheme="primary" px="10">
          Salvar
        </Button>
      </Flex>
    </Flex>
  )
}
