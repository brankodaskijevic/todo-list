import { cleanup, render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '../../../types'
import TasksList from '../TodoList/TodoList'
import { TodosFilterProps } from './interfaces'
import TodosFilter from './TodosFilter'


describe('TodoFilter', () => {
  let renderResult: RenderResult
  let renderTodoList: RenderResult

  const onFilteredTodos: jest.Mock = jest.fn()
  const onSetTasks: jest.Mock = jest.fn()
  const todos: Todo[] = [
    { id: uuidv4(), text: 'test todo 1', complete: false, priority: 'HIGH' },
    { id: uuidv4(), text: 'test todo 2', complete: false, priority: 'MEDIUM' },
  ]

  const todoFilterProps: TodosFilterProps = {
    todos,
    onFilteredTodos
  }

  beforeEach(() => {
    renderResult = render(<TodosFilter {...todoFilterProps} />)
  })

  afterAll(() => {
    cleanup()
  })

  it('renders TodoFilter component with right properties', () => {
    const filterOptionsDropdown: Element = renderResult.getByText('All')
    const filterButton: Element = renderResult.getByText('Set filter')

    expect(filterOptionsDropdown).toBeInTheDocument()
    expect(filterButton).toBeInTheDocument()
  })

  it('should filter todos when user click "Set filter" button', () => {
    const filterButton: Element = renderResult.getByText('Set filter')

    userEvent.click(filterButton)

    expect(onFilteredTodos).toHaveBeenCalled()
  })

  // it('should show the right priority options', () => {
  //   const priorityOption = renderResult.findByText('High')

  //   expect(priorityOption).toBeInTheDocument()
  // })


  // it('shoul render todos with priority HIGH if selected in the dropdown', () => {
    // renderTodoList = render(<TasksList todos={todos} onSetTasks={onSetTasks}  />)

    // const filterOptionsDropdown: Element = renderResult.getByText('All')
    // const priorityOption: Element = renderResult.getByText('High')
    // const filterButton: Element = renderResult.getByText('Set filter')
    // const filterdTaskText: Element = renderTodoList.getByText('test todo 2')

    // userEvent.click(filterOptionsDropdown)
    // userEvent.click(priorityOption)
    // userEvent.click(filterButton)

    // expect(filterdTaskText).toBeInTheDocument()
  // })
})
