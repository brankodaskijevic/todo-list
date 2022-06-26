import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoInput from './TodoInput'
import { TodoInputProps } from './interfaces';

describe('TodoInput', () => {
  const onAddTodo: jest.Mock = jest.fn()

  const todoProps: TodoInputProps = {
    onAddTodo
  }

  beforeEach(() => {
    render(<TodoInput {...todoProps} />)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('renders TodoInput component with right properties', () => {
    const input: Element = screen.getByPlaceholderText('Enter new todo')
    const selectText: Element = screen.getByText('Select todo priority')
    const defaultPrioritySelected = screen.getByText('Medium')
    const button: Element = screen.getByText('ADD TODO')

    expect(input).toBeInTheDocument()
    expect(selectText).toBeInTheDocument()
    expect(defaultPrioritySelected).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should trigger "Add todo" button when clicked', () => {
    const button: Element = screen.getByText('ADD TODO')

    userEvent.click(button)

    expect(onAddTodo).toHaveBeenCalled()
  })
})
