import { Todo } from '../../../types'

export interface TodoProps {
  todos: Array<Todo>
  onSetTodos: Function
}
