import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { UploadIcon } from '../../icons'

export const Dropzone = () => {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const previews = files.map((file) => (
    <Box d="Flex" alignItems="center" key={file.name} gap="4">
      <Box boxSize="64px">
        <Image
          src={file.preview}
          alt={file.name}
          onLoad={() => {
            URL.revokeObjectURL(file.preview)
          }}
        />
      </Box>

      <Text>{file.name}</Text>
    </Box>
  ))

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [])

  return (
    <Flex flexDir="column" gap="4" className="container">
      <Box
        d="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap="4"
        p="10"
        borderWidth="2px"
        borderStyle="dotted"
        {...getRootProps({ className: 'dropzone' })}
      >
        <input {...getInputProps()} />
        <UploadIcon boxSize="16" />
        <Text>
          Arraste seu arquivos aqui ou Clique para selecionar os arquivos
        </Text>
      </Box>
      <Box as="aside">
        <Heading fontSize="xl" mb="4">
          Arquivos:{' '}
        </Heading>
        {previews}
      </Box>
    </Flex>
  )
}
