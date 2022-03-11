import { extendTheme } from '@chakra-ui/react'

// override semanticTokens
import semanticColors from './semanticColors'

// override components
import Button from './button'

const theme = extendTheme({
  semanticTokens: {
    colors: semanticColors,
  },
  components: {
    Button,
  },
})

export default theme
