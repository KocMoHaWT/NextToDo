import React, { Ref, forwardRef } from 'react';
import classnames from 'classNames';

interface LabelProps {
  title: string;
  ref?: Ref<HTMLLabelElement>;
  tabIndex?: number;
  position?: string;
}

export const Label: React.FunctionComponent<LabelProps> = forwardRef((props, ref) => {
  const { title, children, tabIndex } = props;
  const labelStyles = classnames(

  )
  return (
    <label ref={ref} tabIndex={tabIndex}>
      {title}
      {children}
    </label>
  );
});
