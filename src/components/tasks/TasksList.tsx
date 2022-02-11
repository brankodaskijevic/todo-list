const TasksList = ({ todos, onSetTasks }) => {
  const deleteItemHandler = (id) => {
    const newTasksList =
      todos.filter((todo) => todo.id !== id)

    onSetTasks(newTasksList)
  }

  return (
    <ul>
      {console.log(todos)}
      {todos.map(item => (
        <li key={item.id}>
          {item.text} - {item.priority}
          <button onClick={deleteItemHandler.bind(null, item.id)}>X</button>
        </li>
      ))}
    </ul>
  )
}

export default TasksList
