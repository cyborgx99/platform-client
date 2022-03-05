import { ReactComponent as Close } from 'assets/icons/close.svg';
import IconComponent from 'components/icon';
import React from 'react';
import { unathorizedPath } from 'routes/pathKeys';
import { removeSlash } from 'utils';

import {
  LinkText,
  NavigationContainer,
  NavigationLinkContainer,
  NavigationTopPart,
  StyledNavLink,
} from './styles';
import { INavbarProps } from './types';

const getNavLinks = (userRole?: 'student' | 'teacher') => {
  switch (userRole) {
    default:
      return unathorizedPath;
  }
};

const Navbar = ({ isShown, onToggle }: INavbarProps) => {
  return (
    <NavigationContainer $isShown={isShown}>
      <NavigationTopPart>
        <p>Navigation</p>
        <IconComponent title='Close navbar' onClick={onToggle} Svg={Close} />
      </NavigationTopPart>
      <NavigationLinkContainer>
        {Object.values(getNavLinks()).map((link) => (
          <StyledNavLink key={link} to={link}>
            {({ isActive }) => (
              <LinkText $isActive={isActive}>
                {link === '/' ? 'Home' : removeSlash(link)}
              </LinkText>
            )}
          </StyledNavLink>
        ))}
      </NavigationLinkContainer>
    </NavigationContainer>
  );
};

export default Navbar;
