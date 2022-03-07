import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

export type LoaderSizeType = 'small' | 'medium' | 'large';

export interface ISpinnerProps {
  size?: LoaderSizeType;
}

export type LoaderSizes = {
  [key in LoaderSizeType]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};
