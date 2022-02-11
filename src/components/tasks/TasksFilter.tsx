import { useState } from 'react'
import { Button } from '../global/button/Button'

const TasksFilter = ({ todos, onFilteredTasks }) => {
  const [filterValue, setFilterValue] = useState('')

  const filterHandler = (event) => {
    setFilterValue(event.target.value)
  }

  const submitFilterHandler = (event) => {
    event.preventDefault()

    const filteredTasks =
      todos.filter((task) => task.priority === filterValue)

    onFilteredTasks(filteredTasks)
  }

  return (
    <>
      <form onSubmit={submitFilterHandler}>
        <select value={filterValue} onChange={filterHandler}>
          <option>Filter tasks</option>
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