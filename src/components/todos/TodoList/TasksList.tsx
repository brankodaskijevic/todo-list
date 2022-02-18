import { FC } from 'react'
import { Todo } from '../../../types'
import Task from '../Todo/Todo'
import { TaskListProps } from './interfaces'

const TasksList: FC<TaskListProps> = ({
  todos,
  onSetTasks
}) => {
  return (
    <ul>
      <Task todos={todos} onSetTasks={onSetTasks} />
    </ul>
  )
}

export default TasksList
