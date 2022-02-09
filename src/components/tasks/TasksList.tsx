const TasksList = ({ items }) => {
  return (
    <ul>
      {console.log(items)}
      {items.map(item => (
        <li key={item.id}>{item.text}{console.log(item.text)}</li>
      ))}
    </ul>
  )
}

export default TasksList
