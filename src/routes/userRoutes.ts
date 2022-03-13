import { lazy } from 'react';

import { pathKeys } from './pathKeys';
import { IRouteInterface } from './types';

const Dashboard = lazy(() => import('../pages/dashboard'));

export const userRoutes: IRouteInterface[] = [
  { path: pathKeys.user.DASHBOARD, Component: Dashboard },
];
