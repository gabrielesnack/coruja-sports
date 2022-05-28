import {
  Box,
  Button,
  FormControl,
  Grid,
  Heading,
  Input,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Field } from '../../../commons/components/Field'
import { CategoriesType } from '../../../commons/types'
import { useCreateOrUpdateCategory } from '../../hooks/useCreateOrUpdateCategory'
import { ProviderSubmitResponse } from '../../hooks/useCreateOrUpdateCategory/interface'
import { CreateCategoryProps } from './interface'

export const CreateCategory = ({ onSubmitCallback }: CreateCategoryProps) => {
  const { submit } = useCreateOrUpdateCategory()

  const [category, setCategory] = useState<string>()

  const onCreate = async () => {
    if (!category) return

    const res = await submit({ name: category })

    if (res.ok) {
      const data = res.data as NonNullable<ProviderSubmitResponse['data']>
      onSubmitCallback({ id: data.id, name: data.name })
    }
  }

  return (
    <Box>
      <Heading
        fontSize="medium"
        fontWeight="bold"
        mb="4"
        color="blackAlpha.800"
      >
        Adicionar Categoria
      </Heading>

      <FormControl as="form" mb="6">
        <Grid templateColumns={['1fr', null, '1fr .3fr 1fr']} gap="6">
          <Field>
            <Input
              placeholder="Nome da Categoria"
              size="md"
              value={category}
              onChange={(e) => setCategory(e?.target?.value)}
            />
          </Field>
          <Button colorScheme="primary" onClick={onCreate}>
            Salvar
          </Button>
        </Grid>
      </FormControl>
    </Box>
  )
}
