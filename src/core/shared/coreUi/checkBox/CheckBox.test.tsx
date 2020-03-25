import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { CheckBox } from './CheckBox';
import '@testing-library/jest-dom/extend-expect';

const todoLabel = 'djf;lakjdf';

describe('checkbox', () => {
  afterEach(cleanup);

  it('checkbox has label', () => {
    const { getByText } = render(<CheckBox name="checkbox" title={todoLabel} defaultValue />);
    const element = getByText(todoLabel);
    expect(element).toBeInTheDocument();
  });
});
