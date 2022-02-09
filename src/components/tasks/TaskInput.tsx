import { useState } from 'react'
import { Button } from '../global/button/Button'

const TaskInput = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState('')

  const taskInputChangeHandler = (event) => {
    setEnteredTask(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()

    onAddTask(enteredTask)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <input type="text" onChange={taskInputChangeHandler} />
      <Button type='submit'>Add task</Button>
    </form>
  )
}

export default TaskInput
