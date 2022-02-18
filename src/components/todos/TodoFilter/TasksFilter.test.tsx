import { cleanup, render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '../../../types'
import TasksList from '../TodoList/TasksList'
import { TasksFilterProps } from './interfaces'
import TasksFilter from './TasksFilter'


describe('TodoFilter', () => {
  let renderResult: RenderResult
  let renderTodoList: RenderResult

  const onFilteredTasks: jest.Mock = jest.fn()
  const onSetTasks: jest.Mock = jest.fn()
  const todos: Array<Todo> = [
    { id: uuidv4(), text: 'test todo 1', complete: false, priority: 'HIGH' },
    { id: uuidv4(), text: 'test todo 2', complete: false, priority: 'MEDIUM' },
  ]

  const todoFilterProps: TasksFilterProps = {
    todos,
    onFilteredTasks
  }

  beforeEach(() => {
    renderResult = render(<TasksFilter {...todoFilterProps} />)
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

  // it('should show the right priority options', () => {
  //   const priorityOption = renderResult.findByText('High')

  //   expect(priorityOption).toBeInTheDocument()
  // })

  it('should filter todos when user click filter button', () => {
    const filterButton: Element = renderResult.getByText('Set filter')

    userEvent.click(filterButton)

    expect(onFilteredTasks).toHaveBeenCalled()
  })

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
