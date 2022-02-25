export type Priority = 'HIGH' | 'MEDIUM' | 'LOW'

export interface Todo {
  id: string
  text: string
  complete: boolean
  priority: Priority | string
}
