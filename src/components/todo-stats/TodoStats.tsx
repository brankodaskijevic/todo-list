import { RingProgress, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import StatsContainer from "./StatsContainer"

const TodoStats = () => {
  const matches = useMediaQuery('(max-width: 786px)')

  const progressSections = [
    { value: 40, color: 'red' },
    { value: 40, color: 'orange' },
    { value: 20, color: 'grape' }
  ]

  return (
    <StatsContainer>
      <RingProgress
        size={matches ? 120 : 240}
        thickness={matches ? 8 : 16}
        sections={progressSections}
      />
      324
      234
    </StatsContainer>
  )
}

export default TodoStats