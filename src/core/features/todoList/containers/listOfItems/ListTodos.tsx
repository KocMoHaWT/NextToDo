import React from 'react';
import { ToDo } from '../../../../shared/interfaces/toDo';
import { TodoItem } from '../listItem/TodoItem';

interface ListTodosProps {
  todos: ToDo[];
  onDelete?: (id: number) => void;
  onComplete?: (id: number) => void;
}
export const ListTodos: React.FunctionComponent<ListTodosProps> = ({ onDelete, onComplete, todos }) => {
  return (
    <ul>
      {todos.map((todo: ToDo) => (
        <TodoItem
          todo={todo}
          onDelete={(): void => onDelete(todo.id)}
          onComplete={(): void => onComplete(todo.id)}
          key={todo.id + todo.info}
        />
      ))}
    </ul>
  );
};
