import React from 'react';
import { Label } from '../label/Label';

interface CheckBoxProps {
  defaultValue?: boolean;
  title?: string;
  name: string;
  onChange: (id) => void;
}

export const CheckBox: React.FunctionComponent<CheckBoxProps> = props => {
  const { title, defaultValue, ...otherProps } = props;

  return (
    <Label title={title || ''}>
      <input type="checkbox" {...otherProps} />
    </Label>
  );
};
