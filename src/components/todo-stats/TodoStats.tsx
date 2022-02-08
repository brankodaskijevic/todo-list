import { FC, useState } from 'react'
import { RingProgress, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Container } from '../global/container/Container'
import StatsLegend from './StatsLegend'
import { Todo } from '../../interfaces'

interface TodoStatsProps {
  todos: Array<Todo>
}

const TodoStats: FC<TodoStatsProps> = ({
  todos
}) => {
  const matches = useMediaQuery('(max-width: 786px)')
  const [totalTasks, setTotalTasks] = useState<number>(todos.length)

  const progressSections = [
    { value: 40, color: 'red' },
    { value: 40, color: 'yellow' },
    { value: 20, color: 'green' }
  ]

  return (
    <Container>
      <RingProgress
        size={matches ? 120 : 200}
        thickness={matches ? 8 : 16}
        sections={progressSections}
      />
      <StatsLegend />
      <Text size='xl'>Total tasks: {totalTasks}</Text>
    </Container>
  )
}

export default TodoStats