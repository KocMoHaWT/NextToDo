import React from 'react';
import classnames from 'classnames';
import styles from './todoItem.component.scss';
import { ToDo } from '../../../../shared/interfaces/toDo';
import { CheckBox } from '../../../../shared/coreUi/checkBox/CheckBox';
import { Button } from '../../../../shared/coreUi/button/Button';

interface TodoItem {
  todo: ToDo;
  onDelete?: () => void;
  onComplete?: () => void;
}

export const TodoItem: React.FunctionComponent<TodoItem> = ({ onComplete, onDelete, todo }) => {
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
