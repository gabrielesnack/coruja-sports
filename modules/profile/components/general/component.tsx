import {
  Grid,
  Input,
  Box,
  Text,
  Flex,
  Button,
  FormControl,
} from '@chakra-ui/react'
import InputMask from 'react-input-mask'
import { yupResolver } from '@hookform/resolvers/yup'
import { sub } from 'date-fns'
import { Controller, useForm } from 'react-hook-form'
import { DatePicker } from '../../../commons/components/DatePicker'
import { Field } from '../../../commons/components/Field'
import { ProfileInputs } from './interface'
import { schemaValidation } from './props'
import { useUpdateProfile } from '../../hooks/useUpdateProfile'

export const GeneralInformation = (initalizeData: Partial<ProfileInputs>) => {
  const { submit } = useUpdateProfile()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileInputs>({
    resolver: yupResolver(schemaValidation),
    defaultValues: initalizeData,
  })

  const onSave = () => {
    handleSubmit((data) => {
      submit(data)
    })()
  }

  return (
    <Flex flexDir="column" gap="12">
      <FormControl as="form">
        <Grid templateColumns={['1fr', null, '1fr 1fr']} gap="6" pt="8">
          <Box d="flex" flexDir="column" gap="2">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">
              Nome Completo
            </Text>
            <Field isInvalid={!!errors.name} errMsg={errors.name?.message}>
              <Input {...register('name')} />
            </Field>
          </Box>

          <Box d="flex" flexDir="column" gap="2">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">
              Data de Nascimento
            </Text>
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
                    // selected={field.value}
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
          </Box>

          <Box d="flex" flexDir="column" gap="2">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">
              CPF
            </Text>
            <Field isInvalid={!!errors.cpf} errMsg={errors.cpf?.message}>
              <Input
                // @ts-ignore
                as={InputMask}
                mask="999-999-999/99"
                {...register('cpf')}
              />
            </Field>
          </Box>

          <Box d="flex" flexDir="column" gap="2">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">
              Número de telefone
            </Text>
            <Field isInvalid={!!errors.phone} errMsg={errors.phone?.message}>
              <Input
                // @ts-ignore
                as={InputMask}
                mask="(99) 9 9999-9999"
                {...register('phone')}
              />
            </Field>
          </Box>
        </Grid>
      </FormControl>

      <Button
        w={['100%', null, 'fit-content']}
        colorScheme="primary"
        alignSelf="flex-end"
        px="10"
        onClick={onSave}
      >
        Salvar
      </Button>
    </Flex>
  )
}
