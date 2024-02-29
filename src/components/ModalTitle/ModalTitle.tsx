import * as React from 'react';
import { ModalTitleProps } from '../../types';
import cnx from '../../utils/cnx';

const ModalTitle: React.FC<ModalTitleProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <header className={cnx(`title`, className)} {...rest}>
      {children}
    </header>
  );
};

export default ModalTitle;
