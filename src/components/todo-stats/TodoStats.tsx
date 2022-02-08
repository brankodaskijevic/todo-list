import { RingProgress } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Container } from '../global/container/Container'
import StatsLegend from './StatsLegend'

const TodoStats = () => {
  const matches = useMediaQuery('(max-width: 786px)')

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
    </Container>
  )
}

export default TodoStats