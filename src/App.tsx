import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'

import Header from './components/header/Header'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './components/todos/TodoList/TodoList'
import TodoInput from './components/todos/TodoInput/TodoInput'
import TodosFilter from './components/todos/TodoFilter/TodosFilter'
import { Todo, Priority } from './types'

const theme = {
  tablet: '1024px',
  mobile: '768px'
}

const todos: Array<Todo> = [
  { id: uuidv4(), text: 'Task 1', complete: false, priority: 'HIGH' },
  { id: uuidv4(), text: 'Task 2', complete: true, priority: 'LOW' },
  { id: uuidv4(), text: 'Task 3', complete: false, priority: 'LOW' },
  { id: uuidv4(), text: 'Task 4', complete: true, priority: 'MEDIUM' },
]

function App() {
  const [initalTodos, setInitalTodos] = useState<Array<Todo>>(todos)
  const [filteredTodos, setFilteredTodos] = useState<Array<Todo>>(todos)

  useEffect(() => {
    setFilteredTodos(initalTodos)
  }, [initalTodos])

  const addTaskHandler = (todoText: string, priority: Priority) => {
    setInitalTodos(prevTodos => {
      const updatedTodos = [...prevTodos]
      updatedTodos.unshift({
        id: uuidv4(),
        text: todoText,
        complete: false,
        priority: priority
      })

      return updatedTodos
    })
  }

  let content: JSX.Element = (
    <p>No tasks found</p>
  )

  if (initalTodos.length > 0) {
    content = (
      <TodoList todos={filteredTodos} onSetTodos={setInitalTodos} />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header>Todo List</Header>
        <TodoInput onAddTodo={addTaskHandler} />
        <TodosFilter todos={initalTodos} onFilteredTodos={setFilteredTodos} />
        {content}
      </>
    </ThemeProvider>
  )
}

export default App
