import { Todo } from '../../../types'

export interface TodoListProps {
  todos: Todo[]
  onSetTodos: Function
}
