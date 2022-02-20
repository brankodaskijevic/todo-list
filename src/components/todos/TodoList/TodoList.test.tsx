import { cleanup, render, RenderResult } from '@testing-library/react'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './TodoList'
import { Todo } from '../../../types';
import { TodoListProps } from './interfaces'

describe('TodoList', () => {
  let renderResult: RenderResult

  const onSetTodos: jest.Mock = jest.fn()
  const todos: Todo[] = [
    { id: uuidv4(), text: 'test todo 1', complete: false, priority: 'HIGH' },
    { id: uuidv4(), text: 'test todo 2', complete: false, priority: 'LOW' },
  ]

  const todoListProps: TodoListProps = {
    todos,
    onSetTodos
  }

  beforeEach(() => {
    renderResult = render(<TodoList {...todoListProps} />)
  })

  afterAll(() => {
    cleanup()
  })

  it('renders TodoList component with passed todos array', () => {
    const todoOneText: Element = renderResult.getByText('test todo 1')
    const todoOnePriority: Element = renderResult.getByText('HIGH')
    const deleteTodoButton: Element = renderResult.getAllByText('X')[0] as HTMLButtonElement

    const todoTwoText: Element = renderResult.getByText('test todo 2')
    const todoTwoPriority: Element = renderResult.getByText('LOW')
    const deleteTodoTwoButton: Element = renderResult.getAllByText('X')[1] as HTMLButtonElement

    expect(todoOneText).toBeInTheDocument()
    expect(todoOnePriority).toBeInTheDocument()
    expect(deleteTodoButton).toBeInTheDocument()

    expect(todoTwoText).toBeInTheDocument()
    expect(todoTwoPriority).toBeInTheDocument()
    expect(deleteTodoTwoButton).toBeInTheDocument()
  })
})