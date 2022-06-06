import { lazy } from 'react';

import { pathKeys } from './pathKeys';
import { IRouteInterface } from './types';

const LoginPage = lazy(() => import('../pages/login'));
const SignUpPage = lazy(() => import('../pages/signUp'));
const ForgotPasswordPage = lazy(() => import('../pages/forgotPassword'));
const SetNewPasswordPage = lazy(() => import('../pages/newPassword'));
const ConfirmEmail = lazy(() => import('../pages/confirmEmail'));

export const unathorizedRoutes: IRouteInterface[] = [
  {
    path: pathKeys.unathorized.HOME,
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
  {
    path: pathKeys.password.SET_NEW_PASSWORD,
    Component: SetNewPasswordPage,
  },
  {
    path: pathKeys.email.CONFIRM_EMAIL,
    Component: ConfirmEmail,
  },
];
