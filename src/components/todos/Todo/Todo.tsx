import { FC } from 'react'
import { Button } from '../../global/Button/Button'
import { saveTodoToLocalStorage } from '../../../utils/storage/local-storage-utils'
import classes from './Todo.module.css'
import { Todo as TodoT } from '../../../types'
import { TodoProps } from './interfaces'

const Todo: FC<TodoProps> = ({
  todos,
  onSetTodos
}) => {
  const deleteItemHandler = (id: string) => {
    const newTodosList: TodoT[] =
      todos.filter((todo: TodoT) => todo.id !== id)

    onSetTodos(newTodosList)
    saveTodoToLocalStorage('todos', newTodosList)
  }

  return (
		<>
			{todos.map((item: TodoT) => (
				<div className={classes.list_container} key={item.id}>
					<p>{item.text}</p>
					<p className={classes.list_priority}>{item.priority}</p>
					<Button
						onClick={deleteItemHandler.bind(null, item.id)}
						color='#CD5C5C' /* color of the x button on todos */
					>
						X
					</Button>
				</div>
			))}
		</>
	)
}

export default Todo
