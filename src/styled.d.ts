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
  }
}
