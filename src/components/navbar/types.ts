export interface INavbarProps {
  isShown: boolean;
  onToggle: () => void;
  userRole: string | undefined;
}
