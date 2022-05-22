import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Heading,
  Input,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import { Field } from '../../../modules/commons/components/Field'
import Footer from '../../../modules/commons/components/Footer'
import Header from '../../../modules/commons/components/Header'
import { Layout } from '../../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'

const CreateSuppliers: NextPage = () => {
  const router = useRouter()

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Container {...CONTAINER_PROPS} py="10">
        <Box bgColor="whiteAlpha.900" boxShadow="xl" p="4" borderWidth="1px">
          <Heading mb="6" fontSize="xl">
            Novo Fornecedor
          </Heading>

          <FormControl as="form" d="flex" flexDir="column" gap="6">
            <Grid templateColumns={['1fr', null, '1fr 1fr 1fr']} gap="6">
              <Field>
                <Input placeholder="Código da API" size="md" />
              </Field>
              <Field>
                <Input placeholder="Nome do Fornecedor" size="md" />
              </Field>
              <Field>
                <Input placeholder="CNPJ" size="md" />
              </Field>
              <Field>
                <Input placeholder="E-mail" size="md" />
              </Field>
              <Field>
                <Input placeholder="Telefone" size="md" />
              </Field>
            </Grid>

            <Button
              type="submit"
              colorScheme="primary"
              px="10"
              w={['100%', null, 'min-content']}
              alignSelf="end"
            >
              Salvar
            </Button>
          </FormControl>
        </Box>
      </Container>
    </Layout>
  )
}

export default CreateSuppliers
