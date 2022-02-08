import { RingProgress, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { StatsContainer } from './StatsContainer'
import StatsLegend from './StatsLegend'

const TodoStats = () => {
  const matches = useMediaQuery('(max-width: 786px)')

  const progressSections = [
    { value: 40, color: 'red' },
    { value: 40, color: 'yellow' },
    { value: 20, color: 'green' }
  ]

  return (
    <StatsContainer>
      <RingProgress
        size={matches ? 120 : 200}
        thickness={matches ? 8 : 16}
        sections={progressSections}
      />
      <StatsLegend />
    </StatsContainer>
  )
}

export default TodoStats