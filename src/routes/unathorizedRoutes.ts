import { lazy } from 'react';

import { unathorizedPathKeys } from './pathKeys';
import { IRouteInterface } from './types';

const LoginPage = lazy(() => import('../pages/login'));
const SignUpPage = lazy(() => import('../pages/signUp'));
const HomePage = lazy(() => import('../pages/home'));

export const unathorizedRoutes: IRouteInterface[] = [
  { path: unathorizedPathKeys.HOME, Component: HomePage },
  {
    path: unathorizedPathKeys.LOGIN,
    Component: LoginPage,
  },
  {
    path: unathorizedPathKeys.SIGN_UP,
    Component: SignUpPage,
  },
];
