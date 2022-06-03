import { BoxProps } from '@chakra-ui/react'

export const BoxWrapperProps: BoxProps = {
  d: 'flex',
  flexDir: 'column',
  justifyContent: 'space-between',
  borderWidth: '1px',
  borderRadius: 'lg',
  overflow: 'hidden',
  bgColor: 'white',
  boxShadow: 'sm',
  _hover: {
    cursor: 'pointer',
    boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
    transition: 'all .25s ease-in-out',
    transform: 'translateY(-.25rem)',
  },
}
