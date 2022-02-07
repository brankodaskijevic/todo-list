import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Button', () => {
  it('renders the button with some text', () => {
    render(<Header>Test</Header>)

    const button = screen.getByText(/Test/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Test')
  })
})
