import React from 'react';
import classnames from 'classNames';
import { ToDo } from '../../../../shared/interfaces/toDo';
import { CheckBox } from '../../../../shared/coreUi/checkBox/CheckBox';
import { Button } from '../../../../shared/coreUi/button/Button';
import styles from './listtodo.component.scss';

interface TodoItem {
  todo: ToDo;
  onDelete: () => void;
  onComplete: () => void;
}

const TodoItem: React.FunctionComponent<TodoItem> = ({ onComplete, onDelete, todo }) => {
  const todoClass = classnames(styles.listTodo, { [styles.completed]: todo.completed });
  return (
    <li className={todoClass}>
      {todo.info}
      <div className={styles.buttons}>
        <CheckBox name="complete todo" onChange={onComplete} defaultValue={todo.completed} />
        <Button type="button" borderLess onClick={onDelete} className={styles.deleteBtn}>
          ×
        </Button>
      </div>
    </li>
  );
};

interface ListTodosProps {
  todos: ToDo[];
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
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
