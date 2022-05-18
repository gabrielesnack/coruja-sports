import {
  Box,
  Container,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import { NextPage } from 'next/types'
import { Dropzone } from '../../../modules/commons/components/Dropzone'
import { Field } from '../../../modules/commons/components/field'
import Footer from '../../../modules/commons/components/footer'
import Header from '../../../modules/commons/components/header'
import { Layout } from '../../../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../../../modules/commons/config/constants'

const CreateProduct: NextPage = () => {
  return (
    <Layout header={<Header></Header>} footer={<Footer></Footer>}>
      <Container {...CONTAINER_PROPS} mb="12">
        <Heading my="12" fontSize="xl">
          Preencha as informações abaixo para cadastrar um produto
        </Heading>

        <Box d="flex" flexDir="column" gap="4" bgColor="whiteAlpha.900" p="8">
          <FormControl as="form">
            <Grid templateColumns={['1fr', null, '1fr 1fr 1fr']} gap="6">
              <Field>
                <Input placeholder="Nome do Produto" size="md" />
              </Field>
              <Field>
                <Input
                  placeholder="Preço"
                  size="md"
                  defaultValue={'R$ 171,00'}
                />
              </Field>
              <Field>
                <Select
                  placeholder="Selecione a unidade"
                  options={[
                    { label: 'Unidade', value: 'unidade' },
                    { label: 'Peça', value: 'peca' },
                    { label: 'Par', value: 'par' },
                  ]}
                />
              </Field>
              <GridItem colSpan={2} rowSpan={3}>
                <Field>
                  {/* <Input placeholder="Descrição do Produto" size="md" /> */}
                  <Textarea
                    placeholder="Descrição do Produto"
                    rows={7}
                  ></Textarea>
                </Field>
              </GridItem>
              <Field>
                <Select
                  placeholder="Selecione as categorias"
                  isMulti
                  options={[
                    { label: 'Brasileirão', value: 1 },
                    { label: 'La Liga', value: 2 },
                    { label: 'Serie A', value: 3 },
                  ]}
                />
              </Field>
              <Field>
                <Select
                  placeholder="Selecione os Tamanhos"
                  isMulti
                  options={[
                    { label: 'PP', value: 'PP' },
                    { label: 'P', value: 'P' },
                    { label: 'M', value: 'M' },
                    { label: 'G', value: 'G' },
                    { label: 'GG', value: 'GG' },
                    { label: 'XG', value: 'XG' },
                    { label: 'XGG', value: 'XGG' },
                  ]}
                />
              </Field>

              <Field>
                <Select
                  placeholder="Selecione o Fornecedor"
                  options={[{ label: 'AliExpress', value: 1 }]}
                />
              </Field>

              <GridItem colSpan={3}>
                <Dropzone></Dropzone>
              </GridItem>
            </Grid>
          </FormControl>

          <Button colorScheme="primary" alignSelf="end">
            Criar Produto
          </Button>
        </Box>
      </Container>
    </Layout>
  )
}

export default CreateProduct
