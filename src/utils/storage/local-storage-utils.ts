import { Todo } from '../../types';

export function saveTodoToLocalStorage (key: string, todos: Array<Todo>): void {
  localStorage.setItem(key, JSON.stringify(todos))
}

export function getTodosFromLocalStorage (key: string): Array<Todo> {
  let todos: Todo[] = JSON.parse(localStorage.getItem(key) || '[]')

  return todos
}
