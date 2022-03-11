import { useAuth } from 'auth';
import Spinner from 'components/spinner';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './protectedRoute';
import { unathorizedRoutes } from './unathorizedRoutes';
import { userRoutes } from './userRoutes';

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) return <Spinner type='animated' />;

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner type='animated' />}>
        <Routes>
          <Route
            element={
              <ProtectedRoute redirectPath='/dashboard' isAllowed={!user} />
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
              <ProtectedRoute redirectPath='/login' isAllowed={!!user} />
            }>
            {userRoutes.map(({ path, Component }, i) => (
              <Route
                path={path}
                key={path}
                index={i === 0}
                element={<Component />}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
