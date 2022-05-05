import React from 'react';

import { IconContainer } from './styles';
import { IIconComponentProps } from './types';

const IconComponent = <T,>({
  Svg,
  title,
  iconStyle,
  iconContainerStyle,
  data,
  onClick,
}: IIconComponentProps<T>) => {
  const handleClick = () => {
    if (!onClick) return;
    onClick(data);
  };

  return (
    <IconContainer
      data-cy-icon={title}
      disabled={Boolean(!onClick)}
      $iconContainerStyle={iconContainerStyle}
      $iconStyle={iconStyle}
      onClick={handleClick}>
      <Svg title={title} />
    </IconContainer>
  );
};

export default IconComponent;
