import { ChangeEvent, FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button } from '../../global/Button/Button'
import { Container } from '../../global/Container/Container'
import SelectMenu from '../../global/Select/SelectMenu'
import classes from './TodoInput.module.css'
import { Todo, Priority } from '../../../types'
import { TodoInputProps } from './interfaces'
import {
  getTodosFromLocalStorage,
  saveTodoToLocalStorage
} from '../../../utils/storage/local-storage-utils'
import { OptionsType } from '../../global/Select/interfaces'

const TodoInput: FC<TodoInputProps> = ({
  onAddTodo
}) => {
  const [enteredTodo, setEnteredTodo] = useState<string>('')
  const [selectedPriorityType, setSelectedPriorityType] = useState<Priority | string>('')
  const selectData: OptionsType[] = [
    { value: 'HIGH', text: 'High' },
    { value: 'MEDIUM', text: 'Medium' },
    { value: 'LOW', text: 'Low' },
  ]

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
          <SelectMenu
            value={selectedPriorityType}
            selectHandler={prioritySelectChangeHandler}
            defaultValue='Select todo priority'
            data={selectData}
          />
          <Button type='submit'>ADD TODO</Button>
        </div>
      </form>
    </Container>
  )
}

export default TodoInput
