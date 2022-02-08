import { FC } from 'react';
import { Todo } from '../../interfaces';
import { Container } from '../global/container/Container';
import TodoItem from './TodoItem';

interface TodosProps {
  todos: Array<Todo>
}

const Todos: FC<TodosProps> = ({
  todos
}) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <Container>
            <TodoItem todo={todo} key={todo.id} />
          </Container>
        )
      })}
    </>
  )
}

export default Todos
