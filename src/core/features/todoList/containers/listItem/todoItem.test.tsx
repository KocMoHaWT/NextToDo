import React from 'react';
import { create } from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import '@testing-library/jest-dom/extend-expect';

const testLabel = 'djf;lakjdf';

describe('Button', () => {
  afterEach(cleanup);

  it('should be text', () => {
    const { getByText } = render(<TodoItem todo={{ id: 0, info: testLabel, completed: false }} />);
    const element = getByText(testLabel);
    expect(element).toBeInTheDocument();
  });

  it('should be completed', () => {
    const { getByText } = render(<TodoItem todo={{ id: 0, info: testLabel, completed: true }} />);
    const element = getByText(testLabel);
    expect(element).toHaveClass('completed');
  });

  it('todo item renders correctly', () => {
    const tree = create(<TodoItem todo={{ id: 0, info: testLabel, completed: false }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
