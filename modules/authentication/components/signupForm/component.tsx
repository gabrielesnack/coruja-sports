import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  Input,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { RegisterInputsType } from './interface'
import { schemaValidation } from './props'
import { InputPassword } from '../../../commons/components/inputPassword'
import { sub } from 'date-fns'
import { DatePicker } from '../../../commons/components/datePicker'
import InputMask from 'react-input-mask'
import { useRegister } from '../../hooks/useRegister'

export const SignUpForm = () => {
  const { isOpen: isAcceptTerm, onToggle: acceptTerm } = useDisclosure()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputsType>({
    resolver: yupResolver(schemaValidation),
  })

  const { registerUser, isLoading } = useRegister()

  const onSubmit: SubmitHandler<RegisterInputsType> = ({
    passwordConfirmation,
    ...rest
  }) => {
    registerUser(rest)
  }

  const Field = (props: FormControlProps) => (
    <FormControl {...props} isDisabled={isLoading} />
  )

  return (
    <Flex w="100%">
      <FormControl
        position="relative"
        d="flex"
        flexDir="column"
        gap="4"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field isInvalid={!!errors.name}>
          <Input
            placeholder="Digite seu nome"
            size="md"
            {...register('name')}
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </Field>

        <Field isInvalid={!!errors.cpf}>
          <Input
            // @ts-ignore
            as={InputMask}
            mask="999-999-999/99"
            placeholder="Digite seu cpf"
            size="md"
            {...register('cpf')}
          />
          <FormErrorMessage>{errors.cpf?.message}</FormErrorMessage>
        </Field>

        <Field isInvalid={!!errors.birthDate}>
          <Controller
            control={control}
            name="birthDate"
            render={({ field }) => (
              <DatePicker
                showPopperArrow={false}
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                minDate={sub(new Date(), { years: 90 })}
                maxDate={new Date()}
                showMonthDropdown
                showYearDropdown
                customInput={
                  <Field>
                    <Input
                      size="md"
                      readOnly
                      value={field.value?.toLocaleDateString()}
                      placeholder="Selecione sua data de nascimento"
                    />
                  </Field>
                }
              />
            )}
          />

          <FormErrorMessage>{errors.birthDate?.message}</FormErrorMessage>
        </Field>

        <Field isInvalid={!!errors.email}>
          <Input
            placeholder="Digite seu email"
            size="md"
            {...register('email')}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </Field>

        <Field isInvalid={!!errors.password}>
          <InputPassword register={() => register('password')} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </Field>

        <Field isInvalid={!!errors.passwordConfirmation}>
          <InputPassword
            placeholder="Confirme sua senha"
            register={() => register('passwordConfirmation')}
          />
          <FormErrorMessage>
            {errors.passwordConfirmation?.message}
          </FormErrorMessage>
        </Field>

        <Flex mt="6" gap="4" flexDir="column">
          <Checkbox onChange={acceptTerm} isDisabled={isLoading}>
            Concordo com os Termos de Serviço da Coruja Sports.
          </Checkbox>

          <Button
            type="submit"
            colorScheme="primary"
            disabled={!isAcceptTerm || isLoading}
            isLoading={isLoading}
          >
            Cadastrar
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  )
}
