import { Todo } from '../../../types'

export interface TasksFilterProps {
  todos: Array<Todo>
  // onFilterTasks: React.Dispatch<React.SetStateAction<Array<Todo>>>
  onFilteredTasks: Function
}
