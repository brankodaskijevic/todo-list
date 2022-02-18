import { Todo } from '../../../types'

export interface TaskListProps {
  todos: Array<Todo>
  // onSetTasks: React.Dispatch<React.SetStateAction<Todo[]>>
  onSetTasks: Function
}