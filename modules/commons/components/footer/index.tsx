import { Box, Container, Flex, IconButton, Text, Image } from '@chakra-ui/react'
import { CONTAINER_PROPS } from '../../config/constants'
import { InstagramIcon } from '../../icons'
import FooterList from './list'

function Footer() {
  return (
    <Flex
      as="footer"
      w="100%"
      py="6"
      flexDirection="column"
      bgColor="blackAlpha.900"
    >
      <Container {...CONTAINER_PROPS} flexDirection="row">
        <Flex flexDirection="row">
          <FooterList
            title="Informações"
            items={['FAQ', 'Atendimento', 'Reporte um erro']}
          />
          <FooterList
            title="Empresa"
            items={['Sobre nós', 'Entre em contato']}
          />
        </Flex>

        <Box as="hr" my="8"></Box>

        <Flex justifyContent="space-between">
          <Box d="flex" gap="4">
            {/* <Image src="corujasports.png" /> */}
            <Text fontSize="2xl" fontWeight="bold" color="whiteAlpha.900">
              CORUJA SPORTS
            </Text>
          </Box>

          <Flex gap="4">
            <Text fontSize="xl" color="whiteAlpha.900">
              Termos
            </Text>
            <Text fontSize="xl" color="whiteAlpha.900">
              Privacidade
            </Text>
            <Text fontSize="xl" color="whiteAlpha.900">
              Cookies
            </Text>
          </Flex>

          <IconButton
            variant="outline"
            colorScheme="messenger"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<InstagramIcon color="white" />}
          />
        </Flex>
      </Container>
    </Flex>
  )
}

export default Footer
