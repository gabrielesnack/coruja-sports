import { Button, Flex, Input, Link } from '@chakra-ui/react'

export const LoginForm = () => {
  return (
    <Flex w="100%" flexDirection="column" gap="4">
      <Input placeholder="Digite seu email" size="md" />
      <Input placeholder="Digite sua senha" size="md" />
      <Button colorScheme="primary">Entrar</Button>

      <Flex w="100%" justifyContent="center">
        <Link color="info" fontWeight="normal" fontSize="sm">
          Esqueceu sua senha?
        </Link>
      </Flex>

      <Button colorScheme="secondary" variant="outline">
        Criar uma conta
      </Button>
    </Flex>
  )
}
