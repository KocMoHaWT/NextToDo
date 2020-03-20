import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom/extend-expect';

const todoLabel = 'djf;lakjdf';

describe('Button', () => {
  afterEach(cleanup);

  it('renders deploy link', () => {
    const { getByText } = render(<Button>{todoLabel}</Button>);
    const label = getByText(todoLabel);
    expect(label).toBeInTheDocument();
  });

  it('handle click', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>{todoLabel}</Button>);
    const element = getByText(todoLabel);
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalled();
  });

  it('button disabled', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button disabled onClick={handleClick}>
        {todoLabel}
      </Button>
    );
    const element = getByText(todoLabel);
    fireEvent.click(element);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('to have attribute button', () => {
    const { getByText } = render(<Button type="button">{todoLabel}</Button>);
    const element = getByText(todoLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'button');
  });
});
