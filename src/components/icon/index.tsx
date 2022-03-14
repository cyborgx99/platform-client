import React from 'react';

import { IconContainer } from './styles';
import { IIconComponentProps } from './types';

const IconComponent = ({
  Svg,
  title,
  iconStyle,
  iconContainerStyle,
  onClick,
}: IIconComponentProps) => {
  return (
    <IconContainer
      disabled={Boolean(!onClick)}
      $iconContainerStyle={iconContainerStyle}
      $iconStyle={iconStyle}
      onClick={onClick}>
      <Svg title={title} />
    </IconContainer>
  );
};

export default IconComponent;
