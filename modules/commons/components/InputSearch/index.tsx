import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const InputSearch = () => {
  const router = useRouter()
  const [value, setValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!value) return

    if (e && e?.code === 'Enter') {
      router.push(`/search/${value}`)
      return
    }
  }

  const handleOnClick = () => {
    if (!value) return
    router.push(`/search/${value}`)
  }

  return (
    <InputGroup size="lg">
      <Input
        type="text"
        placeholder="O que você está buscando?"
        onChange={handleChange}
        onKeyPress={handleOnEnter}
      />

      <InputRightElement width="4.5rem">
        <Button
          colorScheme="primary"
          h="1.75rem"
          size="sm"
          onClick={handleOnClick}
        >
          <SearchIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default InputSearch
