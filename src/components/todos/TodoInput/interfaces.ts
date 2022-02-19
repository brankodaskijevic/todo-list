import { Priority } from '../../../types'

export interface TodoInputProps {
  onAddTodo: (text: string, priority: Priority) => void
}