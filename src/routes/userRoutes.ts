import { lazy } from 'react';

import { userPathKeys } from './pathKeys';
import { IRouteInterface } from './types';

const Dashboard = lazy(() => import('../pages/dashboard'));

export const userRoutes: IRouteInterface[] = [
  { path: userPathKeys.DASHBOARD, Component: Dashboard },
];
