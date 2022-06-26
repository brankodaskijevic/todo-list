import { ChangeEventHandler } from 'react'
import { Priority, SelectFilter, SelectPriority } from '../../../types'

export type OptionsType = {
  value: SelectFilter
  text: string
}

export interface SelectMenuProps {
  value: SelectFilter | SelectPriority
  selectHandler: ChangeEventHandler
  defaultValue?: string
  data: OptionsType[]
}
