import { cleanup, render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { v4 as uuidv4 } from 'uuid'
import TaskInput from './TaskInput'
import { Todo as Task } from '../../../types';
import { TaskInputProps } from './interfaces';

describe('TodoInput', () => {
  let renderResult: RenderResult

  const onAddTask: jest.Mock = jest.fn()

  const todoProps: TaskInputProps = {
    onAddTask
  }

  beforeEach(() => {
    renderResult = render(<TaskInput {...todoProps} />)
  })

  afterAll(() => {
    cleanup()
  })

  it('renders TodoInput component with right properties', () => {
    const input: Element = renderResult.getByPlaceholderText('Todo text')
    const selectText: Element = renderResult.getByText('Select task priority')
    const defaultPrioritySelected = renderResult.getByText('Medium')
    const button: Element = renderResult.getByText('Add task')

    expect(input).toBeInTheDocument()
    expect(selectText).toBeInTheDocument()
    expect(defaultPrioritySelected).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
