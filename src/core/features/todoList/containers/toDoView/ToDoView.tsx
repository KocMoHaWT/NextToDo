import React, { useEffect, useState } from 'react';
import '../../../../../assets/sass/reset.scss';
import { useDispatch } from 'react-redux';
import css from './todoView.component.scss';
import { NavBar } from '../../../../shared/navbar/containers/navbar';
import { AddTodoAct } from '../../todoList.actions';
import { ToDo } from '../../../../shared/interfaces/toDo';

interface ToDoViewProps {
  todos: ToDo[];
  nextId: number;
}

export const ToDoView: React.FunctionComponent<ToDoViewProps> = ({ todos, nextId }): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [nextIndex, setNextIndex] = useState(0);
  useEffect(() => {
    setNextIndex(nextId);
  }, [nextId]);
  const dispatch = useDispatch();

  const addTodo = (): void => {
    const todo = { id: nextIndex, info: inputValue, completed: false };
    dispatch(new AddTodoAct({ todo }));
    setInputValue('');
  };

  return (
    <div className={css.wrapper}>
      <div className={css.todoBlock}>
        <h1>To Do List</h1>
        <input type="text" value={inputValue} onChange={(e): void => setInputValue(e.target.value)} />
        <button onClick={addTodo}>addTodo</button>
        <ul>{todos && todos.map(todo => <li key={todo.id}>{todo.info}</li>)}</ul>
        <NavBar />
      </div>
    </div>
  );
};
