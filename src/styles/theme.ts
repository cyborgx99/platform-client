import { css, DefaultTheme } from 'styled-components/macro';

const myTheme: DefaultTheme = {
  colors: {
    primary: {
      lightest: '#C9F0FF',
      lighter: '#9BDCFD',
      light: '#6EC2FB',
      base: '#48A7F8',
      darkest: '#0065D0',
    },
    secondary: {
      lightest: '#E7E7FF',
      lighter: '#C6C4FF',
      light: '#9990FF',
      base: '#6B4EFF',
      darkest: '#5538EE',
    },
    black: {
      lighter: '#72777A',
      light: '#6C7072',
      base: '#404446',
      dark: '#303437',
      darker: '#202325',
      darkest: '#090A0A',
    },
    gray: {
      lightest: '#F7F9FA',
      lighter: '#F2F4F5',
      light: '#E3E5E5',
      base: '#CDCFD0',
      darkest: '#979C9E',
    },
    white: '#FFFFFF',
    red: {
      lightest: '#FFE5E5',
      lighter: '#FF9898',
      light: '#FF6D6D',
      base: '#FF5247',
      darkest: '#D3180C',
    },
    green: {
      lightest: '#ECFCE5',
      lighter: '#7DDE86',
      light: '#4CD471',
      base: '#23C16B',
      darkest: '#198155',
    },
    yellow: {
      lightest: '#FFEFD7',
      lighter: '#FFD188',
      light: '#FFC462',
      base: '#FFB323',
      darkest: '#A05E03',
    },
  },
  typography: {
    fontWeights: {
      medium: 500,
      regular: 400,
      bold: 700,
    },
    fontFamily: "'Inter', sans-serif",
    title: {
      one: css`
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.167;
      `,
      two: css`
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.125;
      `,
      three: css`
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.335;
      `,
    },
    largeText: {
      bold: css`
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.34;
      `,
      medium: css`
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.34;
      `,
      regular: css`
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.34;
      `,
    },
    normalText: {
      bold: css`
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5;
      `,
      medium: css`
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5;
      `,
      regular: css`
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
      `,
    },
  },
};

export { myTheme };
