import { Role } from 'apollo/graphql/generated.types';
import { ReactComponent as Close } from 'assets/icons/delete.svg';
import IconComponent from 'components/icon';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { pathKeys } from 'routes/pathKeys';
import { removeSlash } from 'utils';

import {
  deleteIconStyle,
  LinkText,
  NavigationContainer,
  NavigationLinkContainer,
  NavigationTopPart,
  StyledNavLink,
} from './styles';
import { INavbarProps } from './types';

const getNavLinks = (userRole?: Role) => {
  switch (userRole) {
    case Role.User:
      return pathKeys.user;
    case Role.Teacher:
      return pathKeys.teacher;
    default:
      return pathKeys.unathorized;
  }
};

const Navbar = ({ isShown, onToggle, userRole }: INavbarProps) => {
  const { t } = useTranslation();
  return (
    <NavigationContainer data-cy-nav $isShown={isShown}>
      <NavigationTopPart>
        <IconComponent
          iconStyle={deleteIconStyle}
          title='Close navbar'
          onClick={onToggle}
          Svg={Close}
        />
      </NavigationTopPart>
      <NavigationLinkContainer>
        {Object.values(getNavLinks(userRole)).map((link) => (
          <StyledNavLink data-cy-nav-link={link} key={link} to={link}>
            {({ isActive }) => (
              <LinkText $isActive={isActive}>
                {t(
                  `pages.navigation.${
                    link === '/' ? 'login' : removeSlash(link)
                  }`
                )}
              </LinkText>
            )}
          </StyledNavLink>
        ))}
      </NavigationLinkContainer>
    </NavigationContainer>
  );
};

export default Navbar;
