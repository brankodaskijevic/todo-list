import { Todo } from '../../../types'

export interface TodoInputProps {
  onAddTodo: React.Dispatch<React.SetStateAction<Todo[]>>
}