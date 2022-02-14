import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'

import Header from './components/header/Header'
import { v4 as uuidv4 } from 'uuid'
import TasksList from './components/tasks/TasksList'
import TaskInput from './components/tasks/TaskInput'
import TasksFilter from './components/tasks/TasksFilter'
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
  const [initalTasks, setInitalTasks] = useState<Array<Todo>>(todos)
  const [filteredTasks, setFilteredTasks] = useState<Array<Todo>>(todos)

  useEffect(() => {
    setFilteredTasks(initalTasks)
  }, [initalTasks])

  const addTaskHandler = (taskText: string, priority: Priority) => {
    setInitalTasks(prevTasks => {
      const updatedTasks = [...prevTasks]
      updatedTasks.unshift({
        id: uuidv4(),
        text: taskText,
        complete: false,
        priority: priority
      })

      return updatedTasks
    })
  }

  let content: JSX.Element = (
    <p>No tasks found</p>
  )

  if (initalTasks.length > 0) {
    content = (
      <TasksList todos={filteredTasks} onSetTasks={setInitalTasks} />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header>Todo List</Header>
        <TaskInput onAddTask={addTaskHandler} />
        <TasksFilter todos={initalTasks} onFilteredTasks={setFilteredTasks} />
        {content}
      </>
    </ThemeProvider>
  )
}

export default App
