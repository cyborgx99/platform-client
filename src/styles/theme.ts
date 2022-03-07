import { css, DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  colors: {
    primary: {
      main: '#134091',
      active: '#205BB5',
      hover: '#0C2E78',
    },
    secondary: {
      main: '#555770',
      active: '#8E90A6',
      hover: '#28293D',
    },
    text: '#151D3B',
    gray: '#E3E4EB',
    white: '#FFFFFF',
    error: {
      main: '#DB2A30',
      hover: '#B81D2F',
      active: '#FF4539',
    },
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
