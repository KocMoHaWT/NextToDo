import React from 'react';
import ToDoView from '../src/core/features/todoList/containers/toDoView/index';
import StoreLayout from '../src/core/layouts/StoreLayout';

function HomePage(): JSX.Element {
  return (
    <StoreLayout>
      <ToDoView />
    </StoreLayout>
  );
}

export default HomePage;
