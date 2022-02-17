import { FC } from 'react'
import { Todo } from '../../../types'
import Task from '../Todo/Todo'

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
      <Task todos={todos} onSetTasks={onSetTasks} />
    </ul>
  )
}

export default TasksList
