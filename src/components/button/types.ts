interface BasicButtonProps {
  variant: 'primary' | 'secondary' | 'textOnly';
  isLoading: boolean;
}

interface SubmitButtonProps extends BasicButtonProps {
  type: 'submit';
  onClick?: () => void;
}

interface CLickButtonProps extends BasicButtonProps {
  type: 'button';
  onClick: () => void;
}

export type ButtonProps = SubmitButtonProps | CLickButtonProps;
