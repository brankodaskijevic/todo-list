import { Todo } from '../../../types'

export interface TodosFilterProps {
  todos: Todo[]
  // onFilterTasks: React.Dispatch<React.SetStateAction<Array<Todo>>>
  onFilteredTodos: Function
}
