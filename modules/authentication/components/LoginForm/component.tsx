import {
  Button,
  Flex,
  FormControl,
  FormControlProps,
  Input,
  Link,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Field } from '../../../commons/components/Field'
import { InputPassword } from '../../../commons/components/InputPassword'
import { useLogin } from '../../hooks/useLogin'
import { LoginInputsType } from './inteface'
import { schemaValidation } from './props'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputsType>({
    resolver: yupResolver(schemaValidation),
  })

  const { login, isLoading } = useLogin()

  const onSubmit: SubmitHandler<LoginInputsType> = (data) => {
    login(data)
  }

  return (
    <Flex w="100%">
      <FormControl
        position="relative"
        d="flex"
        flexDir="column"
        gap="4"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        isDisabled={isLoading}
      >
        <Flex flexDir="column" gap="4">
          <Field isInvalid={!!errors.email} errMsg={errors.email?.message}>
            <Input
              placeholder="Digite seu email"
              size="md"
              {...register('email')}
            />
          </Field>

          <Field
            isInvalid={!!errors.password}
            errMsg={errors.password?.message}
          >
            <InputPassword
              placeholder="Digite sua senha"
              register={() => register('password')}
            />
          </Field>
        </Flex>

        <Flex flexDir="column" gap="4">
          <Button
            type="submit"
            colorScheme="primary"
            isDisabled={isLoading}
            isLoading={isLoading}
          >
            Entrar
          </Button>

          <Flex w="100%" justifyContent="center">
            <Link color="info" fontWeight="normal" fontSize="sm">
              Esqueceu sua senha?
            </Link>
          </Flex>

          <Button
            colorScheme="secondary"
            variant="outline"
            isDisabled={isLoading}
            isLoading={isLoading}
          >
            Criar uma conta
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  )
}
