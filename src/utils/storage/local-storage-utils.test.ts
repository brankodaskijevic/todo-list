import { v4 as uuidv4 } from 'uuid'
import { Todo } from '../../types'
import {
  saveTodoToLocalStorage,
  getTodosFromLocalStorage
} from './local-storage-utils'

describe('saveTodoLocalStorage, getTodosFromLocalStorage', () => {

  const testTodo: Todo = {
    id: uuidv4(),
    text: 'test todo 1',
    complete: false,
    priority: 'HIGH'
  }

  it('should store the test todo to local storage', () => {
    saveTodoToLocalStorage('test-todos', [testTodo])
  })

  it('should retrieve the test todo from local storage', () => {
    const todos: Todo[] = getTodosFromLocalStorage('test-todos')

    expect(todos.length).toBe(1)
  })
})
