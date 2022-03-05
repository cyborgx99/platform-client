import React from 'react';

import { CloseIcon, NavigationContainer } from './styles';
import { INavbarProps } from './types';

const Navbar = ({ isShown, onToggle }: INavbarProps) => {
  return (
    <NavigationContainer $isShown={isShown}>
      Navbar
      <CloseIcon onClick={onToggle} />
    </NavigationContainer>
  );
};

export default Navbar;
