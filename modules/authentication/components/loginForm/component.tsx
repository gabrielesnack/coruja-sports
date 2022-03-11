import { Button, Flex, Input, Text } from '@chakra-ui/react'

export const LoginForm = () => {
  return (
    <Flex w="100%" flexDirection="column" gap="4">
      <Input placeholder="Digite seu Email" size="md" />
      <Input placeholder="Digite sua senha" size="md" />
      <Button colorScheme="primary">Entrar</Button>
      <Text>Esqueceu sua senha? Clique aqui</Text>
      <Button colorScheme="secondary" variant="outline">
        Criar uma conta
      </Button>
    </Flex>
  )
}
