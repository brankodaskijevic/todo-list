import { FC } from 'react'
import Todo from '../Todo/Todo'
import { TodoListProps } from './interfaces'

const TodoList: FC<TodoListProps> = ({
  todos,
  onSetTodos
}) => {
  return (
    <ul>
      <Todo todos={todos} onSetTodos={onSetTodos} />
    </ul>
  )
}

export default TodoList
