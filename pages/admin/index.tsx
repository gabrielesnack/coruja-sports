import {
  Box,
  Container,
  Text,
  Grid,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Flex,
  StatHelpText,
  StatArrow,
  Badge,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import Footer from '../../modules/commons/components/footer'
import Header from '../../modules/commons/components/header'
import { Layout } from '../../modules/commons/components/layout'
import { CONTAINER_PROPS } from '../../modules/commons/config/constants'
import {
  BagIcon,
  CoinIcon,
  OrderIcon,
  PeopleIcon,
  TruckIcon,
  TShirtIcon,
  UserIcon,
} from '../../modules/commons/icons'

const Admin: NextPage = () => {
  const router = useRouter()

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Container {...CONTAINER_PROPS} py="10">
        <Heading fontSize="2xl" mb="10">
          Bem vindo a sessão administrativa
        </Heading>

        <Grid
          templateColumns={['1fr', null, '1fr 1fr', '1fr 1fr 1fr 1fr']}
          gap="6"
          mb="10"
        >
          <Stat
            bg="whiteAlpha.900"
            borderWidth="1px"
            borderRadius="md"
            boxShadow="sm"
          >
            <Flex flexDir="column" p="6" pb="4">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                w="100%"
                h="100%"
                mb="1"
              >
                <Box>
                  <StatLabel>Total de Usuários</StatLabel>
                  <StatNumber>341</StatNumber>
                </Box>

                <UserIcon boxSize="8" />
              </Flex>
              <StatHelpText>Número de usuários cadastrados.</StatHelpText>
            </Flex>
          </Stat>

          <Stat
            bg="whiteAlpha.900"
            borderWidth="1px"
            borderRadius="md"
            boxShadow="sm"
          >
            <Flex flexDir="column" p="6" pb="4">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                w="100%"
                h="100%"
                mb="1"
              >
                <Box>
                  <StatLabel>Novos Usuários</StatLabel>
                  <StatNumber>37</StatNumber>
                </Box>

                <UserIcon boxSize="8" />
              </Flex>
              <StatHelpText>
                <StatArrow type="increase" />
                17.05% - Semanal
              </StatHelpText>
            </Flex>
          </Stat>

          <Stat
            bg="whiteAlpha.900"
            borderWidth="1px"
            borderRadius="md"
            boxShadow="sm"
          >
            <Flex flexDir="column" p="6" pb="4">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                w="100%"
                h="100%"
                mb="1"
              >
                <Box>
                  <StatLabel>Quantidade de Pedidos</StatLabel>
                  <StatNumber>43</StatNumber>
                </Box>

                <BagIcon boxSize="8" />
              </Flex>
              <StatHelpText>
                <StatArrow type="increase" />
                12.05% - Mensal
              </StatHelpText>
            </Flex>
          </Stat>

          <Stat
            bg="whiteAlpha.900"
            borderWidth="1px"
            borderRadius="md"
            boxShadow="sm"
          >
            <Flex flexDir="column" p="6" pb="4">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                w="100%"
                h="100%"
                mb="1"
              >
                <Box>
                  <StatLabel>Total de Vendas</StatLabel>
                  <StatNumber>R$ 14.359,44</StatNumber>
                </Box>

                <CoinIcon boxSize="8" />
              </Flex>
              <StatHelpText>
                <StatArrow type="increase" />
                7% - Semanal
              </StatHelpText>
            </Flex>
          </Stat>
        </Grid>

        <Heading fontSize="2xl" mb="10">
          Ferramentas
        </Heading>

        <Grid
          templateColumns={['1fr', null, '1fr 1fr', '1fr 1fr 1fr 1fr']}
          gap="6"
          mb="10"
        >
          <Box
            p="6"
            boxShadow="sm"
            bgColor="whiteAlpha.900"
            borderWidth="1px"
            borderRadius="md"
            cursor="pointer"
            onClick={() => router.push('/admin/collaborators/')}
          >
            <Flex
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
            >
              <Text
                fontSize="sm"
                textAlign="center"
                fontWeight="bold"
                textTransform="uppercase"
              >
                Gerenciar Colaborador
              </Text>

              <PeopleIcon boxSize="20" />

              <Badge colorScheme="blue" alignSelf="self-end">
                Utilizar
              </Badge>
            </Flex>
          </Box>
          <Box
            p="6"
            boxShadow="sm"
            bgColor="whiteAlpha.900"
            borderWidth="1px"
            borderRadius="md"
            cursor="pointer"
            onClick={() => router.push('/admin/products/')}
          >
            <Flex
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
            >
              <Text
                fontSize="sm"
                textAlign="center"
                fontWeight="bold"
                textTransform="uppercase"
              >
                Gerenciar Produtos
              </Text>

              <TShirtIcon boxSize="20" />

              <Badge colorScheme="blue" alignSelf="self-end">
                Utilizar
              </Badge>
            </Flex>
          </Box>

          <Box
            p="6"
            boxShadow="sm"
            bgColor="whiteAlpha.900"
            borderWidth="1px"
            borderRadius="md"
            cursor="pointer"
            onClick={() => router.push('/admin/suppliers/')}
          >
            <Flex
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
            >
              <Text
                fontSize="sm"
                textAlign="center"
                fontWeight="bold"
                textTransform="uppercase"
              >
                Gerenciar Fornecedores
              </Text>

              <TruckIcon boxSize="20" />

              <Badge colorScheme="blue" alignSelf="self-end">
                Utilizar
              </Badge>
            </Flex>
          </Box>

          <Box
            p="6"
            boxShadow="sm"
            bgColor="whiteAlpha.900"
            borderWidth="1px"
            borderRadius="md"
            cursor="pointer"
            onClick={() => router.push('/admin/orders/')}
          >
            <Flex
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              gap="4"
            >
              <Text
                fontSize="sm"
                textAlign="center"
                fontWeight="bold"
                textTransform="uppercase"
              >
                Gerenciar Pedidos
              </Text>

              <OrderIcon boxSize="20" />

              <Badge colorScheme="blue" alignSelf="self-end">
                Utilizar
              </Badge>
            </Flex>
          </Box>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Admin
