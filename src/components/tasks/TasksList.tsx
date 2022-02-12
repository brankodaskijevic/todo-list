import { FC } from 'react'
import { Todo } from '../../types'

interface TaskListProps {
  todos: Array<Todo>
  // onSetTasks: React.Dispatch<React.SetStateAction<Todo[]>>
  onSetTasks: Function
}

const TasksList: FC<TaskListProps> = ({
  todos,
  onSetTasks
}) => {
  const deleteItemHandler = (id: string) => {
    const newTasksList =
      todos.filter((todo: Todo) => todo.id !== id)

    onSetTasks(newTasksList)
  }

  return (
    <ul>
      {console.log(todos)}
      {todos.map((item: Todo) => (
        <li key={item.id}>
          {item.text} - {item.priority}
          <button onClick={deleteItemHandler.bind(null, item.id)}>X</button>
        </li>
      ))}
    </ul>
  )
}

export default TasksList
