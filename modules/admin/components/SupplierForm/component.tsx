import { Button, Flex, FormControl, Grid, Input } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
import { Field } from '../../../commons/components/Field'
import { useCreateOrUpdateSupplier } from '../../hooks/useCreateOrUpdateSupplier'
import { SupplierType } from '../../hooks/useSupplier/interface'
import { SupplierFormProps, SupplierInputs } from './interface'
import { schemaValidation } from './props'

export const SupplierForm = ({
  initialValue,
  onSubmitCallback,
}: SupplierFormProps) => {
  const router = useRouter()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SupplierInputs>({
    resolver: yupResolver(schemaValidation),
    defaultValues: initialValue,
  })

  const { submit } = useCreateOrUpdateSupplier()

  const onSubmit: SubmitHandler<SupplierInputs> = async (data) => {
    const payload = { ...data, id: initialValue?.id }
    const res = await submit(payload)

    const isUpdating = initialValue?.id

    if (res.ok) {
      onSubmitCallback && onSubmitCallback(payload as SupplierType)
      !isUpdating && reset()
    }
  }

  return (
    <FormControl
      as="form"
      d="flex"
      flexDir="column"
      gap="6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid templateColumns={['1fr', null, '1fr 1fr 1fr']} gap="6">
        <Field isInvalid={!!errors.apiCode} errMsg={errors.apiCode?.message}>
          <Input
            placeholder="Código da API"
            size="md"
            {...register('apiCode')}
          />
        </Field>
        <Field isInvalid={!!errors.name} errMsg={errors.name?.message}>
          <Input
            placeholder="Nome do Fornecedor"
            size="md"
            {...register('name')}
          />
        </Field>
        <Field isInvalid={!!errors.cnpj} errMsg={errors.cnpj?.message}>
          <Input
            // @ts-ignore
            as={ReactInputMask}
            placeholder="CNPJ"
            size="md"
            mask="99.999.999/9999-99"
            {...register('cnpj')}
          />
        </Field>
      </Grid>

      <Flex gap="4" justifyContent="end">
        <Button
          colorScheme="primary"
          variant="outline"
          px="10"
          w={['100%', null, 'min-content']}
          alignSelf="end"
          onClick={() => router.back()}
        >
          Voltar
        </Button>

        <Button
          type="submit"
          colorScheme="primary"
          px="10"
          w={['100%', null, 'min-content']}
          alignSelf="end"
        >
          Salvar
        </Button>
      </Flex>
    </FormControl>
  )
}
