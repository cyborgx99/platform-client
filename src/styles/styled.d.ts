import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        lightest: string;
        lighter: string;
        light: string;
        base: string;
        darkest: string;
      };
      secondary: {
        lightest: string;
        lighter: string;
        light: string;
        base: string;
        darkest: string;
      };
      black: {
        lighter: string;
        light: string;
        base: string;
        dark: string;
        darker: string;
        darkest: string;
      };
      gray: {
        lightest: string;
        lighter: string;
        light: string;
        base: string;
        darkest: string;
      };
      red: {
        lightest: string;
        lighter: string;
        light: string;
        base: string;
        darkest: string;
      };
      green: {
        lightest: string;
        lighter: string;
        light: string;
        base: string;
        darkest: string;
      };
      yellow: {
        lightest: string;
        lighter: string;
        light: string;
        base: string;
        darkest: string;
      };
      white: string;
    };
    typography: {
      fontWeights: {
        medium: number;
        regular: number;
        bold: number;
      };
      fontFamily: string;
      title: {
        one: FlattenSimpleInterpolation;
        two: FlattenSimpleInterpolation;
        three: FlattenSimpleInterpolation;
      };
      largeText: {
        bold: FlattenSimpleInterpolation;
        medium: FlattenSimpleInterpolation;
        regular: FlattenSimpleInterpolation;
      };
      normalText: {
        bold: FlattenSimpleInterpolation;
        medium: FlattenSimpleInterpolation;
        regular: FlattenSimpleInterpolation;
      };
    };
  }
}
