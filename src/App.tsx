import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'

import Header from './components/header/Header'
import TodoList from './components/todos/TodoList/TodoList'
import TodoInput from './components/todos/TodoInput/TodoInput'
import TodosFilter from './components/todos/TodoFilter/TodosFilter'
import { Todo } from './types'
import { getTodosFromLocalStorage } from './utils/storage/local-storage-utils'

const theme = {
  tablet: '1024px',
  mobile: '768px'
}

function App() {
  const todos = getTodosFromLocalStorage('todos')

  const [initalTodos, setInitalTodos] = useState<Todo[]>(todos)
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos)

  useEffect(() => {
    setFilteredTodos(initalTodos)
  }, [initalTodos])

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
        <TodoInput onAddTodo={setInitalTodos} />
        <TodosFilter todos={initalTodos} onFilteredTodos={setFilteredTodos} />
        {content}
      </>
    </ThemeProvider>
  )
}

export default App
