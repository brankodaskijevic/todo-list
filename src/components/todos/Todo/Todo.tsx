import { FC } from 'react'
import { Todo as TodoT } from '../../../types'
import { TodoProps } from './interfaces'

const Todo: FC<TodoProps> = ({
  todos,
  onSetTodos
}) => {
  const deleteItemHandler = (id: string) => {
    const newTasksList =
      todos.filter((todo: TodoT) => todo.id !== id)

    onSetTodos(newTasksList)
  }

  return (
    <>
      {todos.map((item: TodoT) => (
        <li key={item.id}>
          <p>{item.text}</p> - <p>{item.priority}</p>
          <button onClick={deleteItemHandler.bind(null, item.id)}>X</button>
        </li>
      ))}
    </>
  )
}

export default Todo
