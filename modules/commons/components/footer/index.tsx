import { Container, Flex, IconButton, Link } from '@chakra-ui/react'
import { CONTAINER_PROPS } from '../../config/constants'
import { FacebookIcon, InstagramIcon, TiktokIcon } from '../../icons'

const LINKS = ['Termos de uso', 'Central de ajuda', 'Fale conosco', 'Sobre nós']

function Footer() {
  const openExternalLink = (link: string) => window?.open(link, '_blank')

  return (
    <Flex
      as="footer"
      w="100%"
      py="6"
      flexDirection="column"
      bgColor="blackAlpha.900"
    >
      <Container {...CONTAINER_PROPS} flexDirection="row">
        <Flex
          flexDir={['column', null, 'row']}
          justifyContent="space-between"
          alignItems="center"
          gap="4"
        >
          <Flex flexFlow="wrap" justifyContent="center" gap="4">
            {LINKS.map((e, idx) => (
              <Link key={idx} fontSize="sm" color="whiteAlpha.900" href="#">
                {e}
              </Link>
            ))}
          </Flex>

          <Flex gap="4">
            <IconButton
              variant="outline"
              aria-label="Instagram do Coruja Sports"
              fontSize="20px"
              icon={<InstagramIcon color="white" />}
              onClick={() =>
                openExternalLink('https://www.instagram.com/usecorujasports/')
              }
            />
            <IconButton
              variant="outline"
              aria-label="Facebook do Coruja Sports"
              fontSize="20px"
              icon={<FacebookIcon color="white" />}
              onClick={() =>
                openExternalLink('https://www.facebook.com/usecorujasports')
              }
            />
            <IconButton
              variant="outline"
              aria-label="Tiktok do Coruja Sports"
              fontSize="20px"
              icon={<TiktokIcon color="white" />}
              onClick={() =>
                openExternalLink('https://www.tiktok.com/@usecorujasports')
              }
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Footer
