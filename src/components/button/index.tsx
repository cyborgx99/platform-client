import Spinner from 'components/spinner';
import React from 'react';

import { StyledButton } from './styles';
import { ButtonProps } from './types';

const ButtonComponent: React.FC<ButtonProps> = ({
  type = 'submit',
  width = 'min',
  isLoading,
  children,
  variant,
  onClick,
}) => {
  return (
    <StyledButton
      data-cy-button
      $variant={variant}
      $width={width}
      onClick={onClick}
      disabled={isLoading}
      type={type}>
      {isLoading ? <Spinner size='small' /> : children}
    </StyledButton>
  );
};

export default ButtonComponent;
