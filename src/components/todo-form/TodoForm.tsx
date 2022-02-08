import { FC, useState } from 'react'
import { Select, Collapse, Input } from '@mantine/core'
import { Todo, TodoPriority } from '../../interfaces'
import { Button } from '../global/button/Button'
import { FormContainer } from './FormContainer'

interface TodoFormProps {
  todos: Array<Todo>
  // setTodosList: () => Array<Todo>
}

const TodoForm: FC<TodoFormProps> = ({
  todos,
  // setTodosList
}) => {
  const [opened, setOpened] = useState(false)

  const selectData = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'Hihg' },
  ]

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log('submited')
  }


  return (
    <FormContainer>
      <Button onClick={() => setOpened((o) => !o)}>Add new todo</Button>

      <Collapse in={opened}>
        <form onSubmit={submitHandler}>
          <Input size='md' placeholder='Add new todo' />
          <Select
            styles={{label: { color: 'rgb(193, 194, 197)' }}}
            label='Choose task priority'
            placeholder='Pick one'
            data={selectData}
          />
          <Button type='submit'>Add</Button>
        </form>
      </Collapse>
    </FormContainer>
  )
}

export default TodoForm