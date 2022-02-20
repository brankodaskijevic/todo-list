import { Todo } from '../../types';

export function saveTodoToLocalStorage (key: string, todos: Todo[]): void {
  localStorage.setItem(key, JSON.stringify(todos))
}

export function getTodosFromLocalStorage (key: string): Todo[] {
  let todos: Todo[] = JSON.parse(localStorage.getItem(key) || '[]')

  return todos
}
