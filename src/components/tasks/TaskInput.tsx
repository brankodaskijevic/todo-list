import { useState } from 'react'
import { Button } from '../global/button/Button'

const TaskInput = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState('')
  const [selectedPriorityType, setSelectedPriorityType] = useState('MEDIUM')

  const taskInputChangeHandler = (event) => {
    setEnteredTask(event.target.value)
  }

  const prioritySelectChangeHandler = (event) => {
    setSelectedPriorityType(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()

    onAddTask(enteredTask, selectedPriorityType)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <input type="text" onChange={taskInputChangeHandler} />
      <small>Select task priority</small>
      <select value={selectedPriorityType} onChange={prioritySelectChangeHandler}>
        <option value="HIGH">High</option>
        <option value="MEDIUM">Medium</option>
        <option value="LOW">Low</option>
      </select>
      <Button type='submit'>Add task</Button>
    </form>
  )
}

export default TaskInput
