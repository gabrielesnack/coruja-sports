import {
  FormControl,
  FormErrorMessage,
  useFormControlContext,
} from '@chakra-ui/react'
import { FieldProps } from './interface'

export const Field = ({ children, errMsg, ...props }: FieldProps) => {
  const { isDisabled } = useFormControlContext()

  return (
    <FormControl {...props} isDisabled={isDisabled}>
      {children}
      <FormErrorMessage>{errMsg}</FormErrorMessage>
    </FormControl>
  )
}
