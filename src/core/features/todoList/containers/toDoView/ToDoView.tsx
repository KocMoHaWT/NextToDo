import React, { useEffect, useRef, useState } from 'react';
import '../../../../../assets/sass/reset.scss';
import { useDispatch } from 'react-redux';
import css from './todoView.component.scss';
import { NavBar } from '../../../../shared/navbar/containers/navbar';
import { AddTodoAct } from '../../todoList.actions';
import { ToDo } from '../../../../shared/interfaces/toDo';
import { FormInput } from '../../../../shared/coreUi/formInput/FormInput';
import { CheckBox } from '../../../../shared/coreUi/checkBox/CheckBox';

interface ToDoViewProps {
  todos: ToDo[];
  nextId: number;
}

export const ToDoView: React.FunctionComponent<ToDoViewProps> = ({ todos, nextId }): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [nextIndex, setNextIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    setNextIndex(nextId);
  }, [nextId]);
  const dispatch = useDispatch();

  const onChange = (): void => {
    setInputValue(inputRef.current.value);
  };

  const addTodo = (): void => {
    const todo = { id: nextIndex, info: inputValue, completed: false };
    dispatch(new AddTodoAct({ todo }));
    setInputValue('');
  };

  const toggleChange = (): void => {
    console.log('fjdfd');
  };

  return (
    <div className={css.wrapper}>
      <div className={css.todoBlock}>
        <h1>To Do List</h1>
        <FormInput ref={inputRef} title="add to do" onChange={onChange} type="text" name="addTodo" value={inputValue} />
        <CheckBox name="todo progress" onChange={toggleChange} />
        <button onClick={addTodo}>addTodo</button>
        <ul>{todos && todos.map(todo => <li key={todo.id}>{todo.info}</li>)}</ul>
        <NavBar />
      </div>
    </div>
  );
};
