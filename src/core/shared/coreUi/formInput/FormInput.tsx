import React, { forwardRef, Ref } from 'react';
import { Label } from '../label/Label';
import { Input } from '../input/Input';

interface FormInputProps {
  ref: Ref<HTMLInputElement>;
  title: string;
  onChange: () => void;
  type: 'text';
  name: string;
  value: string;
}

export const FormInput: React.FunctionComponent<FormInputProps> = forwardRef((props, ref) => {
  const { title, ...otherProps } = props;
  return (
    <Label title={title} position="above">
      <Input ref={ref} {...otherProps} />
    </Label>
  );
});
