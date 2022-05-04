import Spinner from 'components/spinner';
import React from 'react';

import { StyledButton } from './styles';
import { ButtonProps } from './types';

const ButtonComponent = ({
  type = 'submit',
  disabled = false,
  width = 'min',
  isLoading,
  children,
  variant,
  shape = 'round',
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      data-cy-button
      $variant={variant}
      $width={width}
      $shape={shape}
      onClick={onClick}
      disabled={isLoading || disabled}
      type={type}>
      {isLoading ? <Spinner size='small' /> : children}
    </StyledButton>
  );
};

export default ButtonComponent;
