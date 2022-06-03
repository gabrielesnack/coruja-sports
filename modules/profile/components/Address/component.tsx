import {
  Grid,
  Input,
  Box,
  Text,
  Flex,
  Button,
  GridItem,
  Select,
  FormControl,
} from '@chakra-ui/react'
import { Select as CustomSelect } from 'chakra-react-select'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Field } from '../../../commons/components/Field'
import { states } from '../../../commons/helpers/states'
import { OptionType } from '../../../commons/types'
import { useAddress } from '../../hooks/useAddress'
import { AddressPayload } from '../../hooks/useAddress/interface'
import { useCreateAddress } from '../../hooks/useCreateAddress'
import { useDeleteAddress } from '../../hooks/useDeleteAddress'
import { useZipCode } from '../../hooks/useZipCode'
import { AddressInputs, AddressInputValues } from './interface'
import { schemaValidation } from './props'

export const Address = () => {
  const { addresses, mutate } = useAddress()
  const { search, isLoading: isGettingZipCode } = useZipCode()
  const { submit: createAddress, isLoading: isCreating } = useCreateAddress()
  const { submit: deleteAddress, isLoading: isDeleting } = useDeleteAddress()

  const [isOnlyViewing, setOnlyView] = useState(false)
  const isLockedForm = [
    isCreating,
    isDeleting,
    isOnlyViewing,
    isGettingZipCode,
  ].includes(true)

  const {
    control,
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm<AddressInputs>({
    resolver: yupResolver(schemaValidation),
  })

  const updateForm = (data: AddressInputs) => {
    Object.entries(data as AddressInputs).forEach(([name, value]) =>
      setValue(name as keyof AddressInputs, value)
    )
  }

  const onSubmit: SubmitHandler<AddressInputs> = async (data) => {
    const res = await createAddress(data as AddressInputValues)
    if (res.ok && res.data && addresses) {
      mutate({ ...addresses, data: [...addresses.data, res.data] })
    }
  }

  const onDelete = () => {
    const id = getValues('id')
    id && deleteAddress(id)
  }

  const onSearchZipCode = async () => {
    const zipCode = getValues('zipCode')
    const res = await search(zipCode)

    if (res.ok) {
      updateForm(res.data as AddressInputValues)
    }
  }

  const onSelectAddress = (id: number) => {
    if (id === 0) {
      reset()
      setOnlyView(false)
      return
    }

    const loadAddress = addresses?.data.find(
      (e) => e.id === id
    ) as AddressInputs

    updateForm(loadAddress)
    setOnlyView(true)
  }

  const CustomInput = ({
    label,
    name,
  }: {
    name: keyof AddressInputs
    label: string
  }) => {
    return (
      <Box d="flex" flexDir="column" gap="2">
        <Text fontSize="sm" fontWeight="semibold" color="gray.500">
          {label}
        </Text>
        <Field isInvalid={!!errors[name]} errMsg={errors[name]?.message}>
          <Input {...register(name)} />
        </Field>
      </Box>
    )
  }

  return (
    <Flex flexDir="column">
      <Box
        d="flex"
        alignSelf="end"
        flexDir="column"
        gap="2"
        w={['100%', null, 'fit-content']}
        mt={['6', null, '0']}
      >
        <Select
          fontSize="small"
          fontWeight="semibold"
          color="secondary"
          onChange={(e) => onSelectAddress(Number(e.target.value))}
        >
          <option value="0" defaultChecked>
            Novo Endereço
          </option>
          {addresses?.data.map((address) => (
            <option value={address.id} key={`address-${address.id}`}>
              {address.alias}
            </option>
          ))}
        </Select>
      </Box>

      <FormControl
        position="relative"
        d="flex"
        flexDir="column"
        gap="4"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        isDisabled={isLockedForm}
      >
        <Grid templateColumns={['1fr', null, '1fr 1fr 1fr']} gap="6" pt="8">
          <GridItem colSpan={3}>
            <Box
              d="flex"
              flexDir="column"
              gap="2"
              w={[null, null, '50%', '32%']}
            >
              <Text fontSize="sm" fontWeight="semibold" color="gray.500">
                Tag de identificação
              </Text>
              <Field isInvalid={!!errors.alias} errMsg={errors.alias?.message}>
                <Input
                  placeholder="e.g minha casa, meu apartmento"
                  {...register('alias')}
                />
              </Field>
            </Box>
          </GridItem>

          <GridItem colSpan={[3, 3, 2, 1]}>
            <Box d="flex" flexDir="column" gap="2">
              <Text fontSize="sm" fontWeight="semibold" color="gray.500">
                CEP
              </Text>

              <Flex gap="4" alignItems="start">
                <Field
                  isInvalid={!!errors.zipCode}
                  errMsg={errors.zipCode?.message}
                >
                  <Input {...register('zipCode')} />
                </Field>

                <Button
                  colorScheme="secondary"
                  variant="outline"
                  size="md"
                  px="4"
                  borderRadius="sm"
                  onClick={onSearchZipCode}
                  isLoading={isGettingZipCode}
                  isDisabled={isOnlyViewing}
                >
                  Buscar
                </Button>
              </Flex>
            </Box>
          </GridItem>

          <GridItem colSpan={[3, null, 2]}>
            <CustomInput label="Endereço" name="street" />
          </GridItem>

          <GridItem colSpan={[3, 3, 1]}>
            <CustomInput label="Bairro" name="district" />
          </GridItem>

          <GridItem colSpan={[3, 3, 1]}>
            <CustomInput label="Cidade" name="city" />
          </GridItem>

          <GridItem colSpan={[3, 3, 1]}>
            <Box d="flex" flexDir="column" gap="2">
              <Text fontSize="sm" fontWeight="semibold" color="gray.500">
                Estado
              </Text>

              <Field isInvalid={!!errors.state} errMsg={errors.state?.message}>
                <Controller
                  control={control}
                  name="state"
                  render={({ field }) => (
                    <CustomSelect
                      isDisabled={isLockedForm}
                      isInvalid={!!errors.state}
                      placeholder="Selecione o estado"
                      name={field.name}
                      ref={field.ref}
                      value={field.value as unknown as OptionType<string>}
                      onBlur={field.onBlur}
                      onChange={field.onChange}
                      options={states}
                    />
                  )}
                />
              </Field>
            </Box>
          </GridItem>
          <GridItem colSpan={[3, 3, 1]}>
            <CustomInput label="Número" name="number" />
          </GridItem>
          <GridItem colSpan={[3, 3, 1]}>
            <CustomInput label="Complemento" name="complement" />
          </GridItem>
        </Grid>

        <Flex
          flexDir={['column', null, 'row']}
          justifyContent={[null, null, 'flex-end']}
          gap="8"
          mt="10"
        >
          {isOnlyViewing && (
            <Button
              w={['100%', null, 'fit-content']}
              colorScheme="danger"
              variant="outline"
              px="10"
              isDisabled={isDeleting}
              isLoading={isDeleting}
              onClick={onDelete}
            >
              Excluir
            </Button>
          )}

          {!isOnlyViewing && (
            <Button
              type="submit"
              w={['100%', null, 'fit-content']}
              colorScheme="primary"
              px="10"
              isDisabled={isLockedForm}
              isLoading={isLockedForm}
            >
              Salvar
            </Button>
          )}
        </Flex>
      </FormControl>
    </Flex>
  )
}
