import { SegmentedControl } from '@mantine/core'
import { Button } from '../global/button/Button'
import { Container } from '../global/container/Container'

const TodoFilter = () => {
  const SegmentValues = [
    { label: 'High', value: 'high' },
    { label: 'Medium', value: 'medium' },
    { label: 'Low', value: 'low' },
  ]

  return (
    <Container>
      <SegmentedControl
        style={{ margin: '0.4em' }}
        color='blue'
        size='md'
        data={SegmentValues}
      />
      <Button>New task</Button>
    </Container>
  )
}

export default TodoFilter
