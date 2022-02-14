import { ChangeEvent, FC, useState } from 'react'
import { Todo } from '../../types'
import { Button } from '../global/button/Button'

interface TasksFilterProps {
  todos: Array<Todo>
  // onFilterTasks: React.Dispatch<React.SetStateAction<Array<Todo>>>
  onFilteredTasks: Function
}

const TasksFilter: FC<TasksFilterProps> = ({
  todos,
  onFilteredTasks
}) => {
  const [filterValue, setFilterValue] = useState<string>('')

  const filterHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value)
  }

  const submitFilterHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    const fullTodoList: Array<Todo> = [...todos]

    const filteredTasks =
      fullTodoList.filter((todo: Todo) =>
        filterValue === 'ALL' ? todo : todo.priority === filterValue)

    onFilteredTasks(filteredTasks)
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

export default TasksFilter