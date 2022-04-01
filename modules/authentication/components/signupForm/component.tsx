import { Button, Flex, Input } from '@chakra-ui/react'

export const SignUpForm = () => {
  return (
    <Flex w="100%" flexDirection="column" gap="4">
      <Input placeholder="Digite seu nome" size="md" />
      <Input placeholder="Digite seu cpf" size="md" />
      <Input placeholder="Data de nascimento" size="md" />
      <Input placeholder="Digite seu email" size="md" />
      <Input placeholder="Telefone para contato" size="md" />
      <Input placeholder="Digite sua senha" size="md" />
      <Input placeholder="Repita sua senha" size="md" />
      <Button colorScheme="primary">Cadastrar</Button>
    </Flex>
  )
}
