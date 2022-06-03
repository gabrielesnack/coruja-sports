import { useFormControlContext } from '@chakra-ui/react'
import DatePickerComponent, { ReactDatePickerProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const DatePicker = (props: ReactDatePickerProps) => {
  const { isDisabled } = useFormControlContext()

  return <DatePickerComponent {...props} disabled={isDisabled} />
}
