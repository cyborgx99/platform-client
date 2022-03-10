import {
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from 'styled-components';

export type StyledSpanTextTypes =
  | 'regularText'
  | 'regularTextItalic'
  | 'lightText'
  | 'lightTextItalic';

export type StyledSpanTextColorTypes = 'error' | 'dark' | 'white';

export type StyledSpanTextStyles = {
  [key in StyledSpanTextTypes]: FlattenSimpleInterpolation;
};

export type StyledSpanTextColors = {
  [key in StyledSpanTextColorTypes]: FlattenInterpolation<
    ThemeProps<DefaultTheme>
  >;
};

export type StyledSpanProps = {
  children: string;
  textType?: StyledSpanTextTypes;
  textColor?: StyledSpanTextColorTypes;
};
