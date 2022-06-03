import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { useState, ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { EyeIcon, EyeSlashIcon } from '../../icons'

export const InputPassword = ({
  register,
  placeholder,
}: {
  placeholder?: string
  register: () => UseFormRegisterReturn
}) => {
  const [show, setShow] = useState(false)
  const showPass = () => setShow(!show)

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder={placeholder || 'Digite sua senha'}
        defaultValue=""
        {...register()}
      />
      <InputRightElement width="4.5rem">
        <Box onClick={showPass} cursor="pointer">
          {show ? <EyeIcon /> : <EyeSlashIcon />}
        </Box>
      </InputRightElement>
    </InputGroup>
  )
}
