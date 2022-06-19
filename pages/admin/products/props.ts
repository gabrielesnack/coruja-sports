import { OptionType } from '../../../modules/commons/types'

export const toOption = ({ id, name }: Record<string, unknown>) =>
  ({
    label: name,
    value: id,
  } as OptionType<number>)
