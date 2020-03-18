import React from 'react';
import { Label } from '../label/Label';
import styles from './checkBox.component.scss';

interface CheckBoxProps {
  defaultValue?: boolean;
  title?: string;
  name: string;
  onChange: (id) => void;
}

export const CheckBox: React.FunctionComponent<CheckBoxProps> = props => {
  const { title, defaultValue = false, ...otherProps } = props;

  return (
    <Label title={title || ''} className={styles.container}>
      <input type="checkbox" {...otherProps} checked={defaultValue} className={styles.checkBox} />
      <span className={styles.checkmark} />
    </Label>
  );
};
