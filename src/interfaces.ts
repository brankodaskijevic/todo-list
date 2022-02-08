export enum TodoPriority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low'
}

export interface Todo {
  id: string
  text: string
  complete: boolean
  priority: TodoPriority
}