import { useAuth } from 'auth';
import Spinner from 'components/spinner';
import CreateLessonPage from 'pages/createLesson';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { pathKeys } from './pathKeys';
import ProtectedRoute from './protectedRoute';
import { createLessonTabs } from './tabs/createLessonTabs';
import { dashboardTabs } from './tabs/dashboardTabs';
import { unathorizedRoutes } from './unathorizedRoutes';

const DashboardPage = lazy(() => import('../pages/dashboard'));

const AppRoutes = () => {
  const { user } = useAuth();

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
            <Route
              path={pathKeys.teacher.CREATE_LESSON}
              element={<CreateLessonPage />}>
              {user &&
                createLessonTabs.map(({ Component, path }, i) => (
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
