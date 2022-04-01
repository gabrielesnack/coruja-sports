import { BoxProps } from '@chakra-ui/react'

export const BoxWrapperProps: BoxProps = {
  borderWidth: '1px',
  borderRadius: 'lg',
  overflow: 'hidden',
  bgColor: 'white',
  _hover: {
    cursor: 'pointer',
    boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
    transition: 'all .25s ease-in-out',
    transform: 'translateY(-.25rem)',
  },
}
