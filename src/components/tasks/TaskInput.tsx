import { ChangeEvent, FC, useState } from 'react'
import { Priority } from '../../types'
import { Button } from '../global/button/Button'

interface TaskInputProps {
  onAddTask: (text: string, priority: Priority) => void
}

const TaskInput: FC<TaskInputProps> = ({
  onAddTask
}) => {
  const [enteredTask, setEnteredTask] = useState<string>('')
  const [selectedPriorityType, setSelectedPriorityType] = useState<Priority>('MEDIUM')

  const taskInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredTask(event.target.value)
  }

  const prioritySelectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPriorityType(event.target.value as Priority)
  }

  const formSubmitHandler = (event: ChangeEvent<HTMLFormElement>) => {
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
