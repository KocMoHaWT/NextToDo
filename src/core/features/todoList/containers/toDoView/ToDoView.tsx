import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './todoView.component.scss';
import { NavBar } from '../../../../shared/navbar/containers/navbar';
import { AddTodoAct, RemoveTodoAct, ToggleCompleteTodoAct } from '../../todoList.actions';
import { ToDo } from '../../../../shared/interfaces/toDo';
import { FormInput } from '../../../../shared/coreUi/formInput/FormInput';
import { Button } from '../../../../shared/coreUi/button/Button';
import { ListTodos } from '../listItem/ListTodo';

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
    if (inputValue.trim() === '') {
      return;
    }
    dispatch(new AddTodoAct({ todo }));
    setInputValue('');
  };

  const toggleComplete = (id: number): void => {
    dispatch(new ToggleCompleteTodoAct({ id }));
  };
  const removeTodo = (id: number): void => {
    dispatch(new RemoveTodoAct({ id }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.todoBlock}>
        <h1 className={styles.title}>To Do List</h1>
        <div className={styles.inputBlock}>
          <FormInput
            ref={inputRef}
            title="add to do"
            onChange={onChange}
            type="text"
            name="addTodo"
            value={inputValue}
          />
          <Button type="button" borderLess={false} onClick={addTodo}>
            add todo
          </Button>
        </div>
        <ListTodos todos={todos} onDelete={removeTodo} onComplete={toggleComplete} />
        <NavBar />
      </div>
    </div>
  );
};
