import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryActive: string;
      primaryHover: string;
      secondary: string;
      text: string;
      gray: string;
      error: string;
      success: string;
      white: string;
    };
    typography: {
      fontWeights: {
        light: number;
        regular: number;
        bold: number;
      };
      fontFamily: string;
      title: FlattenSimpleInterpolation;
      titleItalic: FlattenSimpleInterpolation;
      regularText: FlattenSimpleInterpolation;
      regularTextItalic: FlattenSimpleInterpolation;
      lightText: FlattenSimpleInterpolation;
      lightTextItalic: FlattenSimpleInterpolation;
    };
  }
}
