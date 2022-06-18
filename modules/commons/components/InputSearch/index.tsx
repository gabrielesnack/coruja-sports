import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const InputSearch = () => {
  const router = useRouter()
  const { product, ...query } = router.query

  const [value, setValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e && (e?.code === 'Enter' || e?.code === 'NumpadEnter')) {
      router.push({ pathname: `/search/${value}`, query })
      return
    }
  }

  const handleOnClick = () => {
    router.push({ pathname: `/search/${value}`, query })
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
