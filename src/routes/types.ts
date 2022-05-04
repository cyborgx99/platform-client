import { Role } from 'apollo/graphql/generated.types';

export interface IRouteInterface {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
}

export type DashboardTabs = Record<Role, IRouteInterface[]>;

export interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath: string;
  children?: React.ReactNode;
}
