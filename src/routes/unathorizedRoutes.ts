import { lazy } from 'react';

import { pathKeys } from './pathKeys';
import { IRouteInterface } from './types';

const LoginPage = lazy(() => import('../pages/login'));
const SignUpPage = lazy(() => import('../pages/signUp'));
const HomePage = lazy(() => import('../pages/home'));
const ForgotPasswordPage = lazy(() => import('../pages/forgotPassword'));

export const unathorizedRoutes: IRouteInterface[] = [
  { path: pathKeys.unathorized.HOME, Component: HomePage },
  {
    path: pathKeys.unathorized.LOGIN,
    Component: LoginPage,
  },
  {
    path: pathKeys.unathorized.SIGN_UP,
    Component: SignUpPage,
  },
  {
    path: pathKeys.password.FORGOT_PASSWORD,
    Component: ForgotPasswordPage,
  },
];
