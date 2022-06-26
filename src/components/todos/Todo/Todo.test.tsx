import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
import { Todo as Task } from '../../../types';
import { TodoProps } from './interfaces';

describe('Todo', () => {
  const onSetTodos: jest.Mock = jest.fn()
  const todos: Task[] = [
    { id: uuidv4(), text: 'test todo 1', complete: false, priority: 'HIGH' },
  ]

  const todoProps: TodoProps = {
    todos,
    onSetTodos
  }

  beforeEach(() => {
    render(<Todo {...todoProps} />)
  })

  afterAll(() => {
    cleanup()
  })

  it('renders Todo component with right properties', () => {
    const todoText: Element = screen.getByText('test todo 1')
    const todoPriority: Element = screen.getByText('HIGH')

    expect(todoText).toBeInTheDocument()
    expect(todoPriority).toBeInTheDocument()
  })

  it('should delete item when user clicks on "X" button', () => {
    const deleteButton: Element = screen.getByText('X')

    userEvent.click(deleteButton)

    expect(onSetTodos).toHaveBeenCalled()
  })
})
