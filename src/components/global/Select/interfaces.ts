import { ChangeEventHandler } from 'react'
import { Priority, SelectFilter } from '../../../types'

export type OptionsType = {
  value: SelectFilter
  text: string
}

export interface SelectMenuProps {
  value: SelectFilter
  selectHandler: ChangeEventHandler
  defaultValue?: string
  data: OptionsType[]
}
