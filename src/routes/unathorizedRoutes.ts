import { lazy } from 'react';

import { unathorizedPath } from './pathKeys';
import { IRouteInterface } from './types';

const LoginPage = lazy(() => import('../pages/login'));
const SignUpPage = lazy(() => import('../pages/signUp'));
const HomePage = lazy(() => import('../pages/home'));

export const unathorizedRoutes: IRouteInterface[] = [
  { path: unathorizedPath.HOME, Component: HomePage },
  {
    path: unathorizedPath.LOGIN,
    Component: LoginPage,
  },
  {
    path: unathorizedPath.SIGN_UP,
    Component: SignUpPage,
  },
];
