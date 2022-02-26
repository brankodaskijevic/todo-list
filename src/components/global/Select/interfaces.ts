import { ChangeEventHandler } from 'react'
import { Priority } from '../../../types'

export type OptionsType = {
  value: Priority | string
  text: string
}

export interface SelectMenuProps<T> {
  value: T
  selectHandler: ChangeEventHandler
  defaultValue?: string
  data: OptionsType[]
}
