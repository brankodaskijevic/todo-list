import { useState } from 'react'
import './App.css'

import { ThemeProvider } from 'styled-components'

import Header from './components/header/Header'
import TodoFilter from './components/todo-filter-creation/TodoFilter'
import TodoStats from './components/todo-stats/TodoStats'
import TodoForm from './components/todo-form/TodoForm'

import { Todo, TodoPriority } from './interfaces'
import { v4 as uuidv4 } from 'uuid'

const theme = {
  tablet: '1024px',
  mobile: '768px'
}

const todos: Array<Todo> = [
  { id: uuidv4(), text: 'Task 1', complete: false, priority: TodoPriority.HIGH },
  { id: uuidv4(), text: 'Task 2', complete: true, priority: TodoPriority.LOW },
  { id: uuidv4(), text: 'Task 3', complete: false, priority: TodoPriority.LOW },
  { id: uuidv4(), text: 'Task 4', complete: true, priority: TodoPriority.MEDIUM },
]

function App() {
  const [todosList, setTodosList] = useState<Array<Todo>>(todos)

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header>Todo List</Header>
        <TodoStats todos={todos} />
        <TodoForm todos={todos} />
        <TodoFilter />
        <Todos todos={todos} />
      </>
    </ThemeProvider>
  )
}

export default App
