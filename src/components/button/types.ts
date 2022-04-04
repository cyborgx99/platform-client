import { CssStyleProp } from 'styles/types';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'textOnly'
  | 'danger'
  | 'success';
export type ButtonWidth = 'min' | 'full';
export type ButtonShape = 'circle' | 'round' | 'rectangle';

export type ButtonVariantStyle = Record<ButtonVariant, CssStyleProp>;
export type ButtonWidthStyle = Record<ButtonWidth, CssStyleProp>;
export type ButtonShapeStyle = Record<ButtonShape, CssStyleProp>;

interface BasicButtonProps {
  variant: ButtonVariant;
  isLoading?: boolean;
  width?: ButtonWidth;
  shape?: ButtonShape;
  disabled?: boolean;
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
