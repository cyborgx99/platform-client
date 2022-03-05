import { lazy } from 'react';

import { paths } from './pathKeys';
import { IRouteInterface } from './types';

const LoginPage = lazy(() => import('../pages/login'));
const SignUpPage = lazy(() => import('../pages/signUp'));
const HomePage = lazy(() => import('../pages/home'));

export const unathorizedRoutes: IRouteInterface[] = [
  { path: paths.HOME, Component: HomePage },
  {
    path: paths.LOGIN,
    Component: LoginPage,
  },
  {
    path: paths.SIGN_UP,
    Component: SignUpPage,
  },
];
