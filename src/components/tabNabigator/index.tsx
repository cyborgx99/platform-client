import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { NavigatorContainer, TabNavigatorLink } from './styles';
import { ITabNavigatorProps } from './types';

const getLinkType = (index = 0, maxIndex = 0) => {
  switch (index) {
    case 0:
      return 'left';
    case maxIndex:
      return 'right';
    default:
      return 'middle';
  }
};

const TabNavigator = ({ tabs }: ITabNavigatorProps) => {
  const location = useLocation();
  const links = Object.values(tabs);
  const { t } = useTranslation();

  return (
    <NavigatorContainer>
      {links.map((link, i) => (
        <TabNavigatorLink
          data-cy-tab-link
          key={link}
          $isActive={location.pathname === link}
          $type={getLinkType(i, links.length - 1)}
          $textType='normalText'
          $textWeight='regular'
          to={link}>
          {t(
            `pages.navigation.tabs.${link.replace(
              /\/(?<=\/)(.*?)(?=\/)\//g,
              ''
            )}`
          )}
        </TabNavigatorLink>
      ))}
    </NavigatorContainer>
  );
};

export default TabNavigator;
