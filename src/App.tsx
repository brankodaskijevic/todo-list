import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import TodoList from './components/todos/TodoList/TodoList'
import TodoInput from './components/todos/TodoInput/TodoInput'
import TodosFilter from './components/todos/TodoFilter/TodosFilter'
import { Container } from './components/global/Container/Container'
import { ScrollView } from './components/global/Scroll/ScrollView'
import SVGImage from './assets/svg/no-data-illustration.svg'
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
    <Container color='fff'> {/* body color */}
      <img src={SVGImage} alt="Empty state" />
    </Container>
  )

  if (initalTodos.length > 0) {
    content = (
      <ScrollView>
        <TodoList todos={filteredTodos} onSetTodos={setInitalTodos} />
      </ScrollView>
    )
  }

  return (
    <>
      <Header>Todos</Header>
      <Container color='fff'> {/* header color */}
        <div>
          <TodoInput onAddTodo={setInitalTodos} />
        </div>
        <div>
          <TodosFilter todos={initalTodos} onFilteredTodos={setFilteredTodos} />
        </div>
      </Container>
      {content}
    </>
  )
}

export default App
