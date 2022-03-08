import Spinner from 'components/spinner';
import React from 'react';

import { StyledButton } from './styles';
import { ButtonProps } from './types';

const ButtonComponent: React.FC<ButtonProps> = ({
  type = 'submit',
  isLoading,
  children,
  onClick,
}) => {
  return (
    <StyledButton onClick={onClick} disabled={isLoading} type={type}>
      {isLoading ? <Spinner size='small' /> : children}
    </StyledButton>
  );
};

export default ButtonComponent;
