import * as React from 'react';
import { ModalBodyType } from '../../types';
import cnx from '../../utils/cnx';

const ModalBody: React.FC<ModalBodyType> = ({
  children,
  scrollable,
  className,
  ...rest
}) => {
  return (
    <div className={cnx('body', className)} {...rest}>
      {children}
    </div>
  );
};

export default ModalBody;
