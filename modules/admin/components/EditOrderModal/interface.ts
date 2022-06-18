import { OptionType } from '../../../commons/types'
import { OrderType } from '../../hooks/useOrders/interface'

export type EditModalProps = OrderType & {
  total: number
}

export type EditOrderInputs = {
  status: OptionType<string>
  items: {
    id: number
    code: string
  }[]
}
