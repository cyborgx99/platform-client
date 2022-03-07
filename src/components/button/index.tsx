import Spinner from 'components/spinner';
import React from 'react';

import { StyledButton } from './styles';
import { IButtonProps } from './types';

const ButtonComponent: React.FC<IButtonProps> = ({
  type = 'submit',
  isLoading,
  children,
}) => {
  return (
    <StyledButton disabled={isLoading} type={type}>
      {isLoading ? <Spinner size='small' /> : children}
    </StyledButton>
  );
};

export default ButtonComponent;
