import {
  Box,
  Container,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import ClientOnly from '../../modules/commons/components/clientOnly'
import Footer from '../../modules/commons/components/footer'
import Header from '../../modules/commons/components/header'
import { Layout } from '../../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../../modules/commons/config/constants'
import { Address } from '../../modules/profile/components/address'
import { Configuration } from '../../modules/profile/components/configuration'
import { GeneralInformation } from '../../modules/profile/components/general'
import { MyOrders } from '../../modules/profile/components/MyOrders'

const Me: NextPage = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <ClientOnly>
        <Flex flexDir="column" w="100%">
          <Container {...CONTAINER_PROPS} pt="8">
            <Heading
              fontSize="large"
              mb="8"
              textAlign={['center', null, null, 'left']}
              color="blackAlpha.800"
            >
              Olá, Nilton Antune, aqui você pode editar suas informações
              pessoais.{' '}
            </Heading>
          </Container>

          <Container
            {...CONTAINER_PROPS}
            pb="8"
            px={['0', '1.5rem', null, null, '1rem']}
          >
            <Box
              borderWidth="1px"
              p={['2', null, null, '8']}
              gap="4"
              bgColor={'whiteAlpha.900'}
            >
              <Tabs>
                <TabList
                  // d="flex"
                  flexFlow={['wrap', null, 'nowrap']}
                  // gap="6"
                  justifyContent={['space-around', null, 'flex-start']}
                >
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
                    <MyOrders />
                  </TabPanel>
                  <TabPanel>
                    <Configuration />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Container>
        </Flex>
      </ClientOnly>
    </Layout>
  )
}

export default Me
