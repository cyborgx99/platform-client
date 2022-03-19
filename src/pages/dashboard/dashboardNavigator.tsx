import React from 'react';

import { DashboardLink, NavigatorContainer } from './styles';

const DashboardNavigator = () => {
  return (
    <NavigatorContainer>
      <DashboardLink
        $isActive={true}
        $type='left'
        $textType='normalText'
        $textWeight='regular'
        to='/users'>
        Users
      </DashboardLink>
      <DashboardLink
        $isActive={false}
        $type='middle'
        to='/lessons'
        $textType='normalText'
        $textWeight='regular'>
        Lessons
      </DashboardLink>
      <DashboardLink
        $isActive={false}
        $type='right'
        to='/classrooms'
        $textType='normalText'
        $textWeight='regular'>
        Classrooms
      </DashboardLink>
    </NavigatorContainer>
  );
};

export default DashboardNavigator;
