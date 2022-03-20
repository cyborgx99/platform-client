import { Role } from 'apollo/graphql/generated.types';
import { useAuth } from 'auth';
import PageLayout from 'components/page';
import Spinner from 'components/spinner';
import React, { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import DashboardTabNavigator from './dashboardTabNavigator';
import { DashboardContainer, DashboardContent } from './styles';

const defaultDashboardPath = (role?: Role) => {
  switch (role) {
    case Role.User:
      return 'homework';
    case Role.Teacher:
      return 'user';
    default:
      return '2';
  }
};

const DashboardPage = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (location.pathname === '/dashboard') {
    return <Navigate to={defaultDashboardPath(user?.role)} replace />;
  }

  return (
    <PageLayout title='Dashboard'>
      <DashboardContainer>
        <DashboardTabNavigator />
        <DashboardContent>
          <Suspense fallback={<Spinner type='animated' />}>
            <Outlet />
          </Suspense>
        </DashboardContent>
      </DashboardContainer>
    </PageLayout>
  );
};

export default DashboardPage;
