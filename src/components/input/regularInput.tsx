import { ReactComponent as Search } from 'assets/icons/search.svg';
import IconComponent from 'components/icon';
import React from 'react';

import {
  RegularInputContainer,
  searchIconContainer,
  StyledRegularInput,
} from './styles';
import { IRegularInputProps } from './types';

const RegularInput = ({
  value,
  placeholder,
  title,
  onChange,
  Svg = Search,
}: IRegularInputProps) => {
  return (
    <RegularInputContainer>
      <IconComponent
        iconContainerStyle={searchIconContainer}
        title='Search Icon'
        Svg={Svg}
      />
      <StyledRegularInput
        title={title}
        $hasIcon={Boolean(Svg)}
        value={value}
        onChange={onChange}
        $hasError={false}
        placeholder={placeholder}
      />
    </RegularInputContainer>
  );
};

export default RegularInput;
