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
  const linkMap = Object.values(tabs);
  const { t } = useTranslation();

  return (
    <NavigatorContainer>
      {linkMap.map((link, i) => (
        <TabNavigatorLink
          key={link}
          $isActive={location.pathname === link}
          $type={getLinkType(i, linkMap.length - 1)}
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