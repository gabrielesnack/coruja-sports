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
import { useStats } from '../../modules/admin/hooks/useStats'
import Footer from '../../modules/commons/components/Footer'
import Header from '../../modules/commons/components/Header'
import { Layout } from '../../modules/commons/components/Layout'
import { CONTAINER_PROPS } from '../../modules/commons/config/constants'
import { toCurrencyBRL } from '../../modules/commons/helpers/currency'
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
  const { stats } = useStats()

  const arrowType = (v?: number) => (v >= 0 ? 'increase' : 'decrease')

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
                  <StatNumber>{stats?.userStats.total}</StatNumber>
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
                  <StatNumber>{stats?.userStats.weekly.count}</StatNumber>
                </Box>

                <UserIcon boxSize="8" />
              </Flex>
              <StatHelpText>
                <StatArrow
                  type={arrowType(stats?.userStats.weekly.increaseadPercent)}
                />
                {stats?.userStats.weekly.increaseadPercent}% - Semanal
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
                  <StatNumber>{stats?.orderStats.weekly.count}</StatNumber>
                </Box>

                <BagIcon boxSize="8" />
              </Flex>
              <StatHelpText>
                <StatArrow
                  type={arrowType(stats?.orderStats.weekly.increaseadPercent)}
                />
                {stats?.orderStats.weekly.increaseadPercent}% - Mensal
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
                  <StatNumber>
                    {toCurrencyBRL(stats?.salesStats.weekly.total || 0)}
                  </StatNumber>
                </Box>

                <CoinIcon boxSize="8" />
              </Flex>
              <StatHelpText>
                <StatArrow
                  type={arrowType(stats?.salesStats.weekly.increaseadPercent)}
                />
                {stats?.salesStats.weekly.increaseadPercent}% - Semanal
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
