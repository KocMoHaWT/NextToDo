import React, { Ref, forwardRef } from 'react';
import classnames from 'classnames';
import style from './label.component.scss';

interface LabelProps {
  title: string;
  ref?: Ref<HTMLLabelElement>;
  tabIndex?: number;
  position?: string;
  className?: string;
}

export const Label: React.FunctionComponent<LabelProps> = forwardRef((props, ref) => {
  const { title, children, tabIndex, position, className } = props;
  const labelStyles = classnames(style.container, {
    [style.right]: position === 'right',
    [style.above]: position === 'above',
    [className]: className,
  });
  return (
    <label ref={ref} tabIndex={tabIndex} className={labelStyles}>
      <span className={style.label}>{title}</span>
      {children}
    </label>
  );
});
