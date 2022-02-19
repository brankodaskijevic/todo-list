import { Todo } from '../../../types'

export interface TodoListProps {
  todos: Array<Todo>
  // onSetTasks: React.Dispatch<React.SetStateAction<Todo[]>>
  onSetTodos: Function
}