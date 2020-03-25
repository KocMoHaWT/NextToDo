import React from 'react';
import classNames from 'classnames';
import styles from './button.component.scss';

interface ButtonProps {
  type?: 'button';
  borderLess?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ className, borderLess = false, children, ...props }) => {
  const buttonStyles = classNames(styles.button, { [styles.unborder]: borderLess, [className]: className });
  return (
    <button {...props} className={buttonStyles}>
      {children}
    </button>
  );
};
