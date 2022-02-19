import { ChangeEvent, FC, useState } from 'react'
import { Priority } from '../../../types'
import { Button } from '../../global/button/Button'
import { TodoInputProps } from './interfaces'

const TodoInput: FC<TodoInputProps> = ({
  onAddTodo
}) => {
  const [enteredTodo, setEnteredTodo] = useState<string>('')
  const [selectedPriorityType, setSelectedPriorityType] = useState<Priority>('MEDIUM')

  const taskInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredTodo(event.target.value)
  }

  const prioritySelectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPriorityType(event.target.value as Priority)
  }

  const formSubmitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    onAddTodo(enteredTodo, selectedPriorityType)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <input type="text" placeholder='Todo text' onChange={taskInputChangeHandler} />
      <small>Select todo priority</small>
      <select value={selectedPriorityType} onChange={prioritySelectChangeHandler}>
        <option value="HIGH">High</option>
        <option value="MEDIUM">Medium</option>
        <option value="LOW">Low</option>
      </select>
      <Button type='submit'>Add todo</Button>
    </form>
  )
}

export default TodoInput
