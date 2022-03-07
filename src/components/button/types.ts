export interface IButtonProps {
  type: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'secondary' | 'textOnly';
  isLoading: boolean;
}
