import { cleanup } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import { ListTodos } from './ListTodos';

const testLabel = 'djf;lakjdf';

const todoList = [
  { id: 0, info: testLabel, completed: false },
  { id: 1, info: testLabel, completed: false },
  { id: 2, info: testLabel, completed: true },
];

describe('Button', () => {
  afterEach(cleanup);

  it('list of items renders correctly', () => {
    const tree = create(<ListTodos todos={todoList} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
