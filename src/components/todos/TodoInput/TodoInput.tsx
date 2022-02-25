import { ChangeEvent, FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button } from '../../global/button/Button'
import { Container } from '../../global/container/Container'
import classes from './TodoInput.module.css'
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
  const [selectedPriorityType, setSelectedPriorityType] = useState<Priority | string>('')

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
    <Container color='fff'>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.form_group}>
          <input
            type="text"
            placeholder='Enter new todo'
            value={enteredTodo}
            className={classes.todo_input}
            onChange={taskInputChangeHandler} />
          <div className={classes.select_group}>
            {/* <small>Select todo priority</small> */}
            <select
              value={selectedPriorityType}
              className={classes.todo_select}
              onChange={prioritySelectChangeHandler}>
              <option>Select todo priority</option>
              <option value="HIGH">High</option>
              <option value="MEDIUM">Medium</option>
              <option value="LOW">Low</option>
            </select>
          </div>
          <Button type='submit'>ADD TODO</Button>
        </div>
      </form>
    </Container>
  )
}

export default TodoInput
