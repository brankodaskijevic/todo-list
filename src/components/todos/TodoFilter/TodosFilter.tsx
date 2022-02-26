import { ChangeEvent, FC, useState } from 'react'
import { Button } from '../../global/Button/Button'
import SelectMenu from '../../global/Select/SelectMenu'
import { Todo } from '../../../types'
import { TodosFilterProps } from './interfaces'
import { OptionsType } from '../../global/Select/interfaces'
import classes from './TodoFilter.module.css'

const TodosFilter: FC<TodosFilterProps> = ({
  todos,
  onFilteredTodos
}) => {
  const [filterValue, setFilterValue] = useState<string>('')
  const filterOptions: OptionsType[] = [
    { value: 'ALL', text: 'All'},
    { value: 'HIGH', text: 'High' },
    { value: 'MEDIUM', text: 'Medium' },
    { value: 'LOW', text: 'Low' },
  ]

  const filterHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value)
  }

  const submitFilterHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    const fullTodoList: Todo[] = [...todos]

    const filteredTodos =
      fullTodoList.filter((todo: Todo) =>
        filterValue === 'ALL' ? todo : todo.priority === filterValue)

    onFilteredTodos(filteredTodos)
  }

  return (
    <form onSubmit={submitFilterHandler}>
      <div className={classes.form_group}>
        <SelectMenu
          value={filterValue}
          selectHandler={filterHandler}
          defaultValue='Filter options'
          data={filterOptions}
        />
        <Button type='submit'>SET FILTER</Button>
      </div>
    </form>
  )
}

export default TodosFilter