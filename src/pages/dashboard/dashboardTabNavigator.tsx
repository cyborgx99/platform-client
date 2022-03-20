import { Role } from 'apollo/graphql/generated.types';
import { useAuth } from 'auth';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { pathKeys } from 'routes/pathKeys';

import { DashboardLink, NavigatorContainer } from './styles';

const getNavTabs = (userRole?: Role) => {
  switch (userRole) {
    case Role.User:
      return pathKeys.tabs.DASHBOARD_STUDENT_TABS;
    case Role.Teacher:
      return pathKeys.tabs.DASHBOARD_TEACHER_TABS;
    default:
      return { link: '' };
  }
};

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

const DashboardTabNavigator = () => {
  const { user } = useAuth();
  const location = useLocation();
  const linkMap = Object.values(getNavTabs(user?.role));
  const { t } = useTranslation();

  return (
    <NavigatorContainer>
      {linkMap.map((link, i) => (
        <DashboardLink
          key={link}
          $isActive={location.pathname === link}
          $type={getLinkType(i, linkMap.length - 1)}
          $textType='normalText'
          $textWeight='regular'
          to={link}>
          {t(`pages.navigation.tabs.${link.replace('/dashboard/', '')}`)}
        </DashboardLink>
      ))}
    </NavigatorContainer>
  );
};

export default DashboardTabNavigator;
