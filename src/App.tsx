import { ThemeProvider } from 'styled-components'
import './App.css'
import Header from './components/header/Header'

const theme = {
  tablet: '1024px',
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header>Todo List</Header>
      </div>
    </ThemeProvider>
  )
}

export default App
