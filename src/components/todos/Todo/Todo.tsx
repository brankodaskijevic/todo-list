import { FC } from 'react'
import { Todo } from '../../../types'
import { TodoProps } from './interfaces'

const Task: FC<TodoProps> = ({
  todos,
  onSetTasks
}) => {
  const deleteItemHandler = (id: string) => {
    const newTasksList =
      todos.filter((todo: Todo) => todo.id !== id)

    onSetTasks(newTasksList)
  }

  return (
    <>
      {todos.map((item: Todo) => (
        <li key={item.id}>
          <p>{item.text}</p> - <p>{item.priority}</p>
          <button onClick={deleteItemHandler.bind(null, item.id)}>X</button>
        </li>
      ))}
    </>
  )
}

export default Task