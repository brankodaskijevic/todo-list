import { render, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button', () => {
  it('renders the button with some text', () => {
    render(<Button>Test</Button>)

    const button = screen.getByText(/Test/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Test')
  })

  it('render the button with some text and color vairant', () => {
    render(<Button>violet color</Button>)

    const button = screen.getByText(/violet color/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('violet color')
  })
})
