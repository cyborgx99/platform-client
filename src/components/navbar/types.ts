import { Role } from 'apollo/graphql/generated.types';

export interface INavbarProps {
  isShown: boolean;
  onToggle: () => void;
  userRole: Role | undefined;
}
