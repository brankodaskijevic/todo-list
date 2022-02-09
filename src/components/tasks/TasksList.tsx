const TasksList = ({ items }) => {
  return (
    <ul>
      {console.log(items)}
      {items.map(item => (
        <li key={item.id}>{item.text} - {item.priority}</li>
      ))}
    </ul>
  )
}

export default TasksList
