import { StyleFunctionProps, SystemStyleFunction } from '@chakra-ui/theme-tools'

const variantGhost: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props

  return {
    color: `${c}Action`,
    bg: 'transparent',
    _hover: {
      bg: `${c}Active`,
    },
    _active: {
      color: 'white',
      bg: `${c}Action`,
    },
    _focus: {
      boxShadow: 'none',
    },
  }
}

const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props

  return {
    border: '1px solid',
    borderColor: `${c}Action`,
    ...variantGhost(props),
  }
}

const variantSolid: SystemStyleFunction = (props: StyleFunctionProps) => {
  return {
    bg: props.colorScheme,
    _hover: {
      bg: `${props.colorScheme}Action`,
    },
    _active: {
      bg: `${props.colorScheme}Active`,
    },
    _focus: {
      boxShadow: 'none',
    },
  }
}

const variantLink: SystemStyleFunction = (props: StyleFunctionProps) => {
  return {
    color: props.colorScheme,
    _focus: {
      boxShadow: 'none',
    },
  }
}

const Buttons = {
  variants: {
    solid: variantSolid,
    outline: variantOutline,
    link: variantLink,
  },
}

export default Buttons
