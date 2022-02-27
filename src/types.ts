export type Priority = 'HIGH' | 'MEDIUM' | 'LOW' | string
export type SelectFilter = Priority | 'ALL'

export interface Todo {
  id: string
  text: string
  complete: boolean
  priority: Priority
}

// export interface HighPriorityTodo {
//   id: string
//   text: undefined
//   complete: boolean
//   priority: 'HIGH'
// }


// export type Todo = GenericTodo | HighPriorityTodo


// const a = (todo: Todo) => {
//   if(todo.priority === 'HIGH'){
//     todo.
//   }
// }