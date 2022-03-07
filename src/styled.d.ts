import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: { main: string; hover: string; active: string };
      secondary: { main: string; hover: string; active: string };
      text: string;
      gray: string;
      error: { main: string; hover: string; active: string };
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
