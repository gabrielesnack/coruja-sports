import {
  Box,
  FormControl,
  Grid,
  GridItem,
  Input,
  Button,
  Textarea,
  Text,
  Switch,
  Flex,
  FormLabel,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Select } from 'chakra-react-select'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import CurrencyFormat from 'react-currency-format'
import { Field } from '../../../commons/components/Field'
import {
  ProductFormProps,
  ProductInputs,
  ProductInputsValues,
} from './interface'
import { InputPriceProps, schemaValidation, toOption } from './props'
import { OptionType, PriceChangeType } from '../../../commons/types'
import { useCreateOrUpdateProduct } from '../../hooks/useCreateOrUpdateProduct'
import { useCategories } from '../../../commons/hooks/useCategories'
import { useGetSupplier } from '../../hooks/useSupplier'
import { useRouter } from 'next/router'

export const ProductForm = ({ initValues }: ProductFormProps) => {
  const isUpdating = !!initValues?.id

  const router = useRouter()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductInputs>({
    resolver: yupResolver(schemaValidation),
    defaultValues: initValues,
  })

  const { categories } = useCategories()
  const categoriesOptions = toOption(categories?.data)

  const { suppliers } = useGetSupplier()
  const supplierOptions = toOption(suppliers?.data)

  const { submit } = useCreateOrUpdateProduct()
  const onSubmit: SubmitHandler<ProductInputs> = async (data) => {
    const values = data as ProductInputsValues
    const res = await submit(values)

    if (res.ok) reset()
  }

  return (
    <Box bgColor="whiteAlpha.900" p="8">
      <FormControl
        as="form"
        d="flex"
        flexDir="column"
        gap="4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid templateColumns={['1fr', null, '1fr 1fr 1fr']} gap="6">
          <Field isInvalid={!!errors.name} errMsg={errors.name?.message}>
            <Input
              placeholder="Nome do Produto"
              size="md"
              {...register('name')}
            />
          </Field>
          <Field isInvalid={!!errors.price} errMsg={errors.price?.message}>
            <Controller
              control={control}
              name="price"
              render={({ field }) => (
                <Input
                  // @ts-ignore
                  as={CurrencyFormat}
                  placeholder="Preço"
                  size="md"
                  value={field.value}
                  onValueChange={({ floatValue }: PriceChangeType) =>
                    field.onChange(floatValue)
                  }
                  {...InputPriceProps}
                />
              )}
            ></Controller>
          </Field>
          <Field
            isInvalid={!!errors.categories}
            errMsg={errors.categories?.message}
          >
            <Controller
              control={control}
              name="categories"
              render={({ field }) => (
                <Select
                  placeholder="Selecione as categorias"
                  isMulti
                  name={field.name}
                  ref={field.ref}
                  value={field.value as unknown as OptionType<Number>}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  options={categoriesOptions}
                />
              )}
            />
          </Field>
          <GridItem colSpan={2} rowSpan={2}>
            <Field
              isInvalid={!!errors.description}
              errMsg={errors.description?.message}
            >
              <Textarea
                placeholder="Descrição do Produto"
                rows={4}
                {...register('description')}
              />
            </Field>
          </GridItem>
          <Field isInvalid={!!errors.sizes} errMsg={errors.sizes?.message}>
            <Controller
              control={control}
              name="sizes"
              render={({ field }) => (
                <Select
                  placeholder="Selecione os Tamanhos"
                  isMulti
                  name={field.name}
                  ref={field.ref}
                  value={field.value as unknown as OptionType<Number>}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  options={[
                    { label: 'PP', value: 1 },
                    { label: 'P', value: 2 },
                    { label: 'M', value: 3 },
                    { label: 'G', value: 4 },
                    { label: 'GG', value: 5 },
                    { label: 'XG', value: 6 },
                    { label: 'XGG', value: 7 },
                  ]}
                />
              )}
            />
          </Field>

          <Field
            isInvalid={!!errors.provider}
            errMsg={errors.provider?.message}
          >
            <Controller
              control={control}
              name="provider"
              render={({ field }) => (
                <Select
                  placeholder="Selecione o Fornecedor"
                  name={field.name}
                  ref={field.ref}
                  value={field.value as unknown as OptionType<Number>}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  options={supplierOptions}
                />
              )}
            />
          </Field>

          <GridItem colSpan={2}>
            <Field isInvalid={!!errors.image} errMsg={errors.image?.message}>
              <Input placeholder="URL da Imagem" {...register('image')} />
            </Field>
          </GridItem>

          <GridItem d="flex" alignContent="center" alignItems="center">
            <Field
              isInvalid={!!errors.isHighlight}
              errMsg={errors.isHighlight?.message}
            >
              <Controller
                control={control}
                name="isHighlight"
                render={({ field }) => (
                  <Flex gap="1" alignItems="center">
                    <FormLabel htmlFor="highlight" mb="0">
                      Colocar em destaque?
                    </FormLabel>
                    <Switch
                      id="highlight"
                      mt="1"
                      size="md"
                      isChecked={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                    />
                  </Flex>
                )}
              />
            </Field>
          </GridItem>
        </Grid>
        <Flex gap="4" justifyContent="flex-end">
          <Button
            variant="outline"
            colorScheme="primary"
            alignSelf="end"
            px="6"
            onClick={() => router.back()}
          >
            Voltar
          </Button>
          <Button type="submit" colorScheme="primary" alignSelf="end" px="6">
            {isUpdating ? 'Salvar' : 'Criar Produto'}
          </Button>
        </Flex>
      </FormControl>
    </Box>
  )
}
