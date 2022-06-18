import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'
import {
  Box,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Input,
  useEditableControls,
  Text,
} from '@chakra-ui/react'
import { CodeTrackEditableWrapperProps } from './interface'

export const CodeTrackEditableWrapper: React.FC<
  CodeTrackEditableWrapperProps
> = ({ children, onSubmit, defaultValue }) => {
  return (
    <Editable
      d="flex"
      alignItems="center"
      fontSize="sm"
      isPreviewFocusable={false}
      onSubmit={(e) => onSubmit(e)}
      defaultValue={defaultValue}
    >
      {children}
    </Editable>
  )
}

export const CodeTrackEditable = () => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls()

  return (
    <Flex gap="2" alignItems="center" mt="2">
      <Box d="flex" gap="2" hidden={isEditing}>
        <Text color="gray.600" fontWeight="semibold">
          Código de Rastreio:
        </Text>
        <EditablePreview p="0" />
      </Box>
      {/* Here is the custom input */}
      <Input as={EditableInput} size="sm" />
      {isEditing ? (
        <ButtonGroup justifyContent="center" size="sm">
          <IconButton
            colorScheme="secondary"
            variant="outline"
            rounded="0"
            size="sm"
            aria-label="salvar"
            icon={<CheckIcon />}
            {...getSubmitButtonProps()}
          />
          <IconButton
            colorScheme="secondary"
            variant="outline"
            rounded="0"
            size="sm"
            aria-label="cancelar"
            icon={<CloseIcon />}
            {...getCancelButtonProps()}
          />
        </ButtonGroup>
      ) : (
        <Flex justifyContent="center">
          <IconButton
            variant="ghost"
            colorScheme="primary"
            aria-label="editar"
            size="sm"
            icon={<EditIcon />}
            {...getEditButtonProps()}
          />
        </Flex>
      )}
    </Flex>
  )
}
