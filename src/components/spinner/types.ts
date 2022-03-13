import { CssStyleProp } from 'styles/types';

export type LoaderSizeType = 'small' | 'medium' | 'large';
export type LoaderTypes = 'regular' | 'animated';

export interface ISpinnerProps {
  size?: LoaderSizeType;
  type?: LoaderTypes;
}

export type LoaderSizes = {
  [key in LoaderSizeType]: CssStyleProp;
};

export type SpinnerComponentTypes = {
  [key in LoaderTypes]: JSX.Element;
};
