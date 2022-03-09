import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

export type LoaderSizeType = 'small' | 'medium' | 'large';
export type LoaderTypes = 'regular' | 'animated';

export interface ISpinnerProps {
  size?: LoaderSizeType;
  type?: LoaderTypes;
}

export type LoaderSizes = {
  [key in LoaderSizeType]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

export type SpinnerComponentTypes = {
  [key in LoaderTypes]: JSX.Element;
};
