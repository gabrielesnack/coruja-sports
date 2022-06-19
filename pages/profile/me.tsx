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
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ClientOnly from '../../modules/commons/components/ClientOnly'
import Footer from '../../modules/commons/components/Footer'
import Header from '../../modules/commons/components/Header'
import { Layout } from '../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../modules/commons/config/constants'
import { useUserContext } from '../../modules/commons/contexts/userContext'
import { Address } from '../../modules/profile/components/Address'
import { Configuration } from '../../modules/profile/components/Configuration'
import { GeneralInformation } from '../../modules/profile/components/General'
import { ProfileInputs } from '../../modules/profile/components/General/interface'
import { MyOrders } from '../../modules/profile/components/MyOrders'

const Me: NextPage = () => {
  const router = useRouter()
  const { user, userStatus } = useUserContext()

  const isOnline = userStatus === 'online'

  useEffect(() => {
    if (userStatus === 'offline') router.push('/')
  }, [userStatus])

  const ProfileGeneral: Partial<ProfileInputs> = {
    name: user?.name,
    cpf: user?.cpf || undefined,
    birthDate: user?.birthDate,
    phone: user?.phone || undefined,
  }

  return (
    <ClientOnly>
      {isOnline && (
        <Layout header={<Header />} footer={<Footer />}>
          <Flex flexDir="column" w="100%">
            <Container {...CONTAINER_PROPS} pt="8">
              <Heading
                fontSize="large"
                mb="8"
                textAlign={['center', null, null, 'left']}
                color="blackAlpha.800"
              >
                Olá, {user?.name}, aqui você pode editar suas informações
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
                      <GeneralInformation {...ProfileGeneral} />
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
        </Layout>
      )}
    </ClientOnly>
  )
}

export default Me
