import { FC } from 'react'
import { Text, Badge } from '@mantine/core'
import { Todo, TodoPriority } from '../../interfaces'

interface TodoProps {
  todo: Todo
}

const TodoItem: FC<TodoProps> = ({
  todo
}) => {
  const badgeColor = (priority: TodoPriority): string | undefined => {
    switch (priority) {
      case 'low':
        return 'green'
        break;
      case 'medium':
        return 'yellow'
      case 'high':
        return 'red'
      default:
        break;
    }
  }

  return (
    <>
      <Text size='md'>{todo.text}</Text>
      <Text size='sm'>{todo.complete ? 'DONE' : 'TO DO'}</Text>
      <Badge variant='filled' color={badgeColor(todo.priority)}>{todo.priority}</Badge>
    </>
  )
}

export default TodoItem