import { ThemeProvider } from 'styled-components'
import './App.css'
import Header from './components/header/Header'
import TodoStats from './components/todo-stats/TodoStats'

const theme = {
  tablet: '1024px',
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header>Todo List</Header>
        <TodoStats></TodoStats>
      </>
    </ThemeProvider>
  )
}

export default App
