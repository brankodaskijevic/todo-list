import { Todo } from '../../../types'

export interface TodoListProps {
  todos: Todo[]
  // onSetTasks: React.Dispatch<React.SetStateAction<Todo[]>>
  onSetTodos: Function
}