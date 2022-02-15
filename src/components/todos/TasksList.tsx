import { FC } from 'react'
import { Todo } from '../../types'
import Task from './Task'

interface TaskListProps {
  todos: Array<Todo>
  // onSetTasks: React.Dispatch<React.SetStateAction<Todo[]>>
  onSetTasks: Function
}

const TasksList: FC<TaskListProps> = ({
  todos,
  onSetTasks
}) => {
  console.log('list render')
  const deleteItemHandler = (id: string) => {
    const newTasksList =
      todos.filter((todo: Todo) => todo.id !== id)

    onSetTasks(newTasksList)
  }

  return (
    <ul>
      {console.log(todos)}
      <Task todos={todos} onSetTasks={onSetTasks} />
    </ul>
  )
}

export default TasksList
