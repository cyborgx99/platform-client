export interface IRouteInterface {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
}
