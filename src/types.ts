export type Priority = 'HIGH' | 'MEDIUM' | 'LOW'
export type SelectFilter = Priority | 'ALL'
export type SelectPriority = Priority | string

export interface Todo {
  id: string
  text: string
  complete: boolean
  priority: SelectPriority
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