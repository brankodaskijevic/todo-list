import { Priority } from '../../../types'

export interface TaskInputProps {
  onAddTask: (text: string, priority: Priority) => void
}