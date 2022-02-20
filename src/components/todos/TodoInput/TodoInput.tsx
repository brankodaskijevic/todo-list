import { ChangeEvent, FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button } from '../../global/button/Button'
import { Todo, Priority } from '../../../types'
import { TodoInputProps } from './interfaces'
import {
  getTodosFromLocalStorage,
  saveTodoToLocalStorage
} from '../../../utils/storage/local-storage-utils'

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

    const newTodo: Todo = {
      id: uuidv4(),
      text: enteredTodo,
      complete: false,
      priority: selectedPriorityType
    }

    onAddTodo((prevTodos) => {
      const updatedTodos: Todo[] = [...prevTodos]
      updatedTodos.unshift(newTodo)

      return updatedTodos
    })

    let todos: Todo[] = getTodosFromLocalStorage('todos')
    todos.unshift(newTodo)

    saveTodoToLocalStorage('todos', todos)

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
