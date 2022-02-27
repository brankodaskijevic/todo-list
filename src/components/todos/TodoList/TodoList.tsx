import { FC } from 'react'
import Todo from '../Todo/Todo'
import { Container } from '../../global/Container/Container'
import classes from './TodoList.module.css'
import { TodoListProps } from './interfaces'

const TodoList: FC<TodoListProps> = ({
  todos,
  onSetTodos
}) =>  (
    <Todo todos={todos} onSetTodos={onSetTodos} />
  )

export default TodoList
