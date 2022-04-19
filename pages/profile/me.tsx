import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Footer from '../../modules/commons/components/footer'
import Header from '../../modules/commons/components/header'
import { Layout } from '../../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../../modules/commons/config/constants'
import { Address } from '../../modules/profile/components/address'
import { Configuration } from '../../modules/profile/components/configuration'
import { GeneralInformation } from '../../modules/profile/components/general'

const Me: NextPage = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Container {...CONTAINER_PROPS} py="8">
        <Heading
          fontSize="large"
          mb="8"
          textAlign={['center', null, null, 'left']}
          color="blackAlpha.800"
        >
          Olá, Nilton Antune, aqui você pode editar suas informações pessoais.{' '}
        </Heading>

        <Box borderWidth="1px" p="8" gap="4" bgColor={'whiteAlpha.900'}>
          <Tabs>
            <TabList>
              <Tab fontWeight="bold" color="gray.400">
                Geral
              </Tab>
              <Tab fontWeight="bold" color="gray.400">
                Endereços
              </Tab>
              <Tab fontWeight="bold" color="gray.400">
                Meus Pedidos
              </Tab>
              <Tab fontWeight="bold" color="gray.400">
                Configuração
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <GeneralInformation />
              </TabPanel>
              <TabPanel>
                <Address />
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
              <TabPanel>
                <Configuration />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Layout>
  )
}

export default Me
