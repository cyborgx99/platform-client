export interface IRouteInterface {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
}

export interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath: string;
}
