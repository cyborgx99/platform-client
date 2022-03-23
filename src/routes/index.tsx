import { useAuth } from 'auth';
import Spinner from 'components/spinner';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { dashboardTabs } from './dashboardStudentTabs';
import { pathKeys } from './pathKeys';
import ProtectedRoute from './protectedRoute';
import { unathorizedRoutes } from './unathorizedRoutes';

const DashboardPage = lazy(() => import('../pages/dashboard'));

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) return <Spinner type='animated' />;

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner type='animated' />}>
        <Routes>
          <Route
            element={
              <ProtectedRoute
                redirectPath={pathKeys.user.DASHBOARD}
                isAllowed={!user}
              />
            }>
            {unathorizedRoutes.map(({ path, Component }, i) => (
              <Route
                path={path}
                key={path}
                index={i === 0}
                element={<Component />}
              />
            ))}
          </Route>
          <Route
            element={
              <ProtectedRoute
                redirectPath={pathKeys.unathorized.LOGIN}
                isAllowed={!!user}
              />
            }>
            <Route path={pathKeys.user.DASHBOARD} element={<DashboardPage />}>
              {user &&
                dashboardTabs[user.role].map(({ Component, path }, i) => (
                  <Route
                    path={path}
                    key={path}
                    index={i === 0}
                    element={<Component />}
                  />
                ))}
              <Route path='*' />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
