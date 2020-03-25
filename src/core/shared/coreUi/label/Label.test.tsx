import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Label } from './Label';
import '@testing-library/jest-dom/extend-expect';

const todoLabel = 'djf;lakjdf';

describe('Label', () => {
  afterEach(cleanup);

  it('label has title', () => {
    const { getByText } = render(<Label title={todoLabel} />);
    const element = getByText(todoLabel);
    expect(element).toBeInTheDocument();
  });

  it('label to the right', () => {
    const { getByText } = render(<Label position="right" title={todoLabel} />);
    const element = getByText(todoLabel);
    expect(element.closest('label')).toHaveClass('right');
  });

  it('label to the above', () => {
    const { getByText } = render(<Label position="above" title={todoLabel} />);
    const element = getByText(todoLabel);
    expect(element.closest('label')).toHaveClass('above');
  });

  it('label has class', () => {
    const { getByText } = render(<Label className="cat" title={todoLabel} />);
    const element = getByText(todoLabel);
    expect(element.closest('label')).toHaveClass('cat');
  });
});
