import { CssStyleProp } from 'styles/types';

type ButtonVariant = 'primary' | 'secondary' | 'textOnly';
type ButtonWidth = 'min' | 'full';

export type ButtonVariantStyle = {
  [key in ButtonVariant]: CssStyleProp;
};

export type ButtonWidthStyle = {
  [key in ButtonWidth]: CssStyleProp;
};
interface BasicButtonProps {
  variant: ButtonVariant;
  isLoading: boolean;
  width?: ButtonWidth;
}

interface SubmitButtonProps extends BasicButtonProps {
  type: 'submit';
  onClick?: () => void;
}

interface ClickButtonProps extends BasicButtonProps {
  type: 'button';
  onClick: () => void;
}

export type ButtonProps = SubmitButtonProps | ClickButtonProps;
