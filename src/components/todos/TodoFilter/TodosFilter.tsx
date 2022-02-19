import { ChangeEvent, FC, useState } from 'react'
import { Todo } from '../../../types'
import { Button } from '../../global/button/Button'
import { TodosFilterProps } from './interfaces'

const TodosFilter: FC<TodosFilterProps> = ({
  todos,
  onFilteredTodos
}) => {
  const [filterValue, setFilterValue] = useState<string>('')

  const filterHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value)
  }

  const submitFilterHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    const fullTodoList: Array<Todo> = [...todos]

    const filteredTodos =
      fullTodoList.filter((todo: Todo) =>
        filterValue === 'ALL' ? todo : todo.priority === filterValue)

    onFilteredTodos(filteredTodos)
  }

  return (
    <>
      <form onSubmit={submitFilterHandler}>
        <select value={filterValue} onChange={filterHandler}>
          <option value='ALL'>All</option>
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
        <Button type='submit'>Set filter</Button>
      </form>
    </>
  )
}

export default TodosFilter