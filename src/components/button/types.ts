import { CssStyleProp } from 'styles/types';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'textOnly'
  | 'danger'
  | 'success';
export type ButtonWidth = 'min' | 'full';
export type ButtonShape = 'circle' | 'round' | 'rectangle';

export type ButtonVariantStyle = {
  [key in ButtonVariant]: CssStyleProp;
};

export type ButtonWidthStyle = {
  [key in ButtonWidth]: CssStyleProp;
};

export type ButtonShapeStyle = {
  [key in ButtonShape]: CssStyleProp;
};
interface BasicButtonProps {
  variant: ButtonVariant;
  isLoading?: boolean;
  width?: ButtonWidth;
  shape?: ButtonShape;
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
