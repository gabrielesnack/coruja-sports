import {
  Grid,
  Input,
  Box,
  Text,
  Flex,
  Button,
  GridItem,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react'
import { useState } from 'react'
import ClientOnly from '../../../commons/components/ClientOnly'
import { EyeIcon, EyeSlashIcon } from '../../../commons/icons'

export const Configuration = () => {
  const [show, setShow] = useState(false)
  const showPass = () => setShow(!show)

  return (
    <Flex flexDir="column" gap="12">
      <Grid templateColumns={['1fr', null, '1fr 1fr']} gap="6" pt="8">
        <Box d="flex" flexDir="column" gap="2">
          <Text fontSize="sm" fontWeight="semibold" color="gray.500">
            Email
          </Text>
          <Input defaultValue="nilton.antune@gmail.com" />
        </Box>

        <GridItem />

        <Box d="flex" flexDir="column" gap="2">
          <Text fontSize="sm" fontWeight="semibold" color="gray.500">
            Senha
          </Text>
          <ClientOnly>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Digite sua senha"
                defaultValue="951283012asdlasd"
              />
              <InputRightElement width="4.5rem">
                <Box onClick={showPass} cursor="pointer">
                  {show ? <EyeIcon /> : <EyeSlashIcon />}
                </Box>
              </InputRightElement>
            </InputGroup>
          </ClientOnly>
        </Box>

        <Box d="flex" flexDir="column" gap="2">
          <Text fontSize="sm" fontWeight="semibold" color="gray.500">
            Confirmar Senha
          </Text>
          <ClientOnly>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Digite sua senha"
                defaultValue="951283012asdlasd"
              />
              <InputRightElement width="4.5rem">
                <Box onClick={showPass} cursor="pointer">
                  {show ? <EyeIcon /> : <EyeSlashIcon />}
                </Box>
              </InputRightElement>
            </InputGroup>
          </ClientOnly>
        </Box>

        <Box d="flex" flexDir="column" gap="2">
          <Text fontSize="sm" fontWeight="semibold" color="gray.500">
            Número de telefone
          </Text>
          <Input defaultValue="(97) 2896-6222" />
        </Box>

        <GridItem></GridItem>

        <Box d="flex" flexDir="column" gap="8" pt="6">
          <Button
            colorScheme="danger"
            variant="link"
            pl="0"
            justifyContent="flex-start"
          >
            Desativar Conta
          </Button>

          <Button
            colorScheme="danger"
            variant="link"
            pl="0"
            justifyContent="flex-start"
          >
            Excluir Conta
          </Button>
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
