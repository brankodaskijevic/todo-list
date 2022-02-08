import { Text, Badge } from "@mantine/core"
import { StatsLegendContainer } from './StatsContainer'

const StatsLegend = () => {

  return (
    <StatsLegendContainer>
      <Text size='sm'>Priority legend:</Text>
      <Badge variant='filled' color='red'>High</Badge>
      <Badge variant='filled' color='yellow'>Medium</Badge>
      <Badge variant='filled' color='green'>Low</Badge>
    </StatsLegendContainer>
  )
}

export default StatsLegend