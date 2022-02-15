import { Todo } from '../../../types'

const Task = ({
  todos,
  onSetTasks
}) => {
  console.log('list render')
  const deleteItemHandler = (id: string) => {
    const newTasksList =
      todos.filter((todo: Todo) => todo.id !== id)

    onSetTasks(newTasksList)
  }

  return (
    <>
      {todos.map((item: Todo) => (
        <li key={item.id}>
          {item.text} - {item.priority}
          <button onClick={deleteItemHandler.bind(null, item.id)}>X</button>
        </li>
      ))}
    </>
  )
}

export default Task