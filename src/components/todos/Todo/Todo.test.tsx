import { cleanup, render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
import { Todo as Task } from '../../../types';
import { TodoProps } from './interfaces';

describe('Todo', () => {
  let renderResult: RenderResult
  const onSetTasks: jest.Mock = jest.fn()

  const todos: Array<Task> = [
    { id: uuidv4(), text: 'test todo 1', complete: false, priority: 'HIGH' },
  ]

  const todoProps: TodoProps = {
    todos: todos,
    onSetTasks: onSetTasks
  }

  beforeEach(() => {
    renderResult = render(<Todo {...todoProps} />)
  })

  afterAll(() => {
    cleanup()
  })

  it('renders Todo component with right properties', () => {
    const todoText: Element = renderResult.getByText('test todo 1')
    const todoPriority: Element = renderResult.getByText('HIGH')

    expect(todoText).toBeInTheDocument()
    expect(todoPriority).toBeInTheDocument()
  })

  it('should delete item when user clicks on X button', () => {
    const deleteButton: Element = renderResult.getByText('X')

    userEvent.click(deleteButton)

    expect(onSetTasks).toHaveBeenCalled()
  })
})
