import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Header from './components/header/Header'
import { v4 as uuidv4 } from 'uuid'
import TasksList from './components/tasks/TasksList'
import TaskInput from './components/tasks/TaskInput'
import TasksFilter from './components/tasks/TasksFilter'

const theme = {
  tablet: '1024px',
  mobile: '768px'
}

const todos = [
  { id: uuidv4(), text: 'Task 1', complete: false, priority: 'HIGH' },
  { id: uuidv4(), text: 'Task 2', complete: true, priority: 'LOW' },
  { id: uuidv4(), text: 'Task 3', complete: false, priority: 'LOW' },
  { id: uuidv4(), text: 'Task 4', complete: true, priority: 'MEDIUM' },
]

function App() {
  const [tasks, setTasks] = useState(todos)

  const addTaskHandler = (taskText, priority) => {
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

  let content = (
    <p>No tasks found</p>
  )

  if (tasks.length > 0) {
    content = (
      <TasksList items={tasks} />
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



