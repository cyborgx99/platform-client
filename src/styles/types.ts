import {
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from 'styled-components/macro';

export type CssStyleProp =
  | FlattenSimpleInterpolation
  | FlattenInterpolation<ThemeProps<DefaultTheme>>;

export type TextType = 'largeText' | 'normalText';
export type TextWeight = 'bold' | 'medium' | 'regular';

export type TextTypeStyle = {
  [key in TextType]: CssStyleProp;
};

export type TextWeightStyle = {
  [key in TextWeight]: CssStyleProp;
};
