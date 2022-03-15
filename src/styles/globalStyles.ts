import { Form } from 'formik';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import { TextType, TextWeight } from './types';

export const FormBase = styled(Form)`
  padding: 0.5rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  width: 100%;
  margin: auto 0;
  max-width: 25rem;
  align-self: center;
`;

export const HeaderOneBase = styled.h1`
  ${({ theme }) => theme.typography.title.one};
  color: ${({ theme }) => theme.colors.black.darkest};
`;

export const HeaderTwoBase = styled.h2`
  ${({ theme }) => theme.typography.title.two};
  color: ${({ theme }) => theme.colors.black.darkest};
`;

export const HeaderThreeBase = styled.h3`
  ${({ theme }) => theme.typography.title.three};
  color: ${({ theme }) => theme.colors.black.darkest};
`;

export const ParagraphBase = styled.p<{
  $textType: TextType;
  $textWeight: TextWeight;
}>`
  ${({ theme, $textType, $textWeight }) =>
    theme.typography[$textType][$textWeight]};
  color: ${({ theme }) => theme.colors.black.darkest};
`;

export const SpanBase = styled.span<{
  $textType: TextType;
  $textWeight: TextWeight;
}>`
  ${({ theme, $textType, $textWeight }) =>
    theme.typography[$textType][$textWeight]};
  color: ${({ theme }) => theme.colors.black.darkest};
`;

export const LabelBase = styled.label<{
  $textType: TextType;
  $textWeight: TextWeight;
}>`
  ${({ theme, $textType, $textWeight }) =>
    theme.typography[$textType][$textWeight]};
  color: ${({ theme }) => theme.colors.black.darkest};
`;

export const LinkBase = styled(Link)<{
  $textType: TextType;
  $textWeight: TextWeight;
}>`
  ${({ theme, $textType, $textWeight }) =>
    theme.typography[$textType][$textWeight]};
  color: ${({ theme }) => theme.colors.primary.base};

  :link {
    text-decoration: none;
  }

  :visited {
    text-decoration: none;
  }

  :hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary.darkest};
  }

  :active {
    text-decoration: none;
  }
`;

export default createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif
}


/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, 
which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}



/* Remove all animations, transitions and smooth scroll 
for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
} 
`;
