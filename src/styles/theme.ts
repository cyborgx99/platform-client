import { css, DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  colors: {
    primary: '#2D31FA',
    primaryActive: '#0509e6',
    primaryHover: '#565afb',
    secondary: '#051367',
    text: '#151D3B',
    gray: '#ECECEC',
    white: '#FFFFFF',
    error: '#FF1818',
    success: '#6EBF8B',
  },
  typography: {
    fontWeights: {
      light: 300,
      regular: 400,
      bold: 700,
    },
    fontFamily: "'Roboto', sans-serif",
    title: css`
      font-size: 1.5rem;
      font-weight: 700;
    `,
    titleItalic: css`
      font-size: 1.5rem;
      font-weight: 700;
      font-style: italic;
    `,
    regularText: css`
      font-size: 1.125rem;
      font-weight: 400;
    `,
    regularTextItalic: css`
      font-size: 1.125rem;
      font-weight: 400;
      font-style: italic;
    `,
    lightText: css`
      font-size: 1rem;
      font-weight: 300;
    `,
    lightTextItalic: css`
      font-size: 1rem;
      font-weight: 300;
      font-style: italic;
    `,
  },
};

export { myTheme };
