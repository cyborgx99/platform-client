import PageLayout from 'components/page';
import React from 'react';

import DashboardNavigator from './dashboardNavigator';

const DashboardPage = () => {
  return (
    <PageLayout title='Dashboard'>
      <DashboardNavigator />
    </PageLayout>
  );
};

export default DashboardPage;
