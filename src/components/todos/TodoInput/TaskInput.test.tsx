import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaskInput from './TaskInput'
import { TaskInputProps } from './interfaces';

describe('TodoInput', () => {
  const onAddTask: jest.Mock = jest.fn()

  const todoProps: TaskInputProps = {
    onAddTask
  }

  beforeEach(() => {
    render(<TaskInput {...todoProps} />)
  })

  afterAll(() => {
    cleanup()
  })

  it('renders TodoInput component with right properties', () => {
    const input: Element = screen.getByPlaceholderText('Todo text')
    const selectText: Element = screen.getByText('Select task priority')
    const defaultPrioritySelected = screen.getByText('Medium')
    const button: Element = screen.getByText('Add task')

    expect(input).toBeInTheDocument()
    expect(selectText).toBeInTheDocument()
    expect(defaultPrioritySelected).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should trigger "Add task" button when clicked', () => {
    const button: Element = screen.getByText('Add task')

    userEvent.click(button)

    expect(onAddTask).toHaveBeenCalled()
  })
})
