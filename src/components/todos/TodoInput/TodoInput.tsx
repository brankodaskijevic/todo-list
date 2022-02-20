import { ChangeEvent, FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button } from '../../global/button/Button'
import { Priority } from '../../../types'
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

    onAddTodo((prevTodos) => {
      const updatedTodos = [...prevTodos]
      updatedTodos.unshift({
        id: uuidv4(),
        text: enteredTodo,
        complete: false,
        priority: selectedPriorityType
      })

      return updatedTodos
    })

    setEnteredTodo('')
    setSelectedPriorityType('MEDIUM')
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <input type="text" placeholder='Todo text' value={enteredTodo} onChange={taskInputChangeHandler} />
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
