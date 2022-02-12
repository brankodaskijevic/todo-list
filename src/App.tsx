import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Header from './components/header/Header'
import { v4 as uuidv4 } from 'uuid'
import TasksList from './components/tasks/TasksList'
import TaskInput from './components/tasks/TaskInput'
import TasksFilter from './components/tasks/TasksFilter'
import { setPriority } from 'os'

type Priority = 'HIGH' | 'MEDIUM' | 'LOW'
interface Todo {
  id: string
  text: string
  complete: boolean
  priority: Priority
}

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
  const [tasks, setTasks] = useState<Array<Todo>>(todos)

  const addTaskHandler = (taskText: string, priority: Priority) => {
    setTasks(prevTasks => {
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

  if (tasks.length > 0) {
    content = (
      <TasksList todos={tasks} onSetTasks={setTasks} />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header>Todo List</Header>
        <TaskInput onAddTask={addTaskHandler} />
        <TasksFilter todos={tasks} onFilteredTasks={setTasks} />
        {content}
      </>
    </ThemeProvider>
  )
}

export default App



