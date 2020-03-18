import React, { forwardRef, Ref } from 'react';
import styles from './input.component.scss';

interface InputProps {
  type: 'text';
  name: string;
  onChange?: () => void;
  disabled?: boolean;
  ref: Ref<HTMLInputElement>;
  value: string;
}

export const Input: React.FunctionComponent<InputProps> = forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={styles.input} />;
});
