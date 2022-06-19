import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  Input,
  useDisclosure,
} from '@chakra-ui/react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { RegisterInputsType } from './interface'
import { schemaValidation } from './props'
import { InputPassword } from '../../../commons/components/InputPassword'
import { sub } from 'date-fns'
import { DatePicker } from '../../../commons/components/DatePicker'
import InputMask from 'react-input-mask'
import { useRegister } from '../../hooks/useRegister'
import { Field } from '../../../commons/components/Field'

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
        <Field isInvalid={!!errors.name} errMsg={errors.name?.message}>
          <Input
            placeholder="Digite seu nome"
            size="md"
            {...register('name')}
          />
        </Field>

        <Field isInvalid={!!errors.cpf} errMsg={errors.cpf?.message}>
          <Input
            // @ts-ignore
            as={InputMask}
            mask="999-999-999/99"
            placeholder="Digite seu cpf"
            size="md"
            {...register('cpf')}
          />
        </Field>

        <Field
          isInvalid={!!errors.birthDate}
          errMsg={errors.birthDate?.message}
        >
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
        </Field>

        <Field isInvalid={!!errors.email} errMsg={errors.email?.message}>
          <Input
            placeholder="Digite seu email"
            size="md"
            {...register('email')}
          />
        </Field>

        <Field isInvalid={!!errors.password} errMsg={errors.password?.message}>
          <InputPassword register={() => register('password')} />
        </Field>

        <Field
          isInvalid={!!errors.passwordConfirmation}
          errMsg={errors.passwordConfirmation?.message}
        >
          <InputPassword
            placeholder="Confirme sua senha"
            register={() => register('passwordConfirmation')}
          />
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
