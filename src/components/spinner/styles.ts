import styled, { css, keyframes } from 'styled-components/macro';

import { LoaderSizes } from './types';

const spin = keyframes`
{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
`;

const loaderSizes: LoaderSizes = {
  small: css`
    border: 0.25rem solid ${({ theme }) => theme.colors.gray};
    border-top: 0.25rem solid ${({ theme }) => theme.colors.primary.base};
    width: 1.7rem;
    height: 1.7rem;
  `,
  medium: css`
    border: 0.5rem solid ${({ theme }) => theme.colors.gray};
    border-top: 0.5rem solid ${({ theme }) => theme.colors.primary.base};
    width: 2.5rem;
    height: 2.5rem;
  `,
  large: css`
    border: 0.75rem solid ${({ theme }) => theme.colors.gray};
    border-top: 0.75rem solid ${({ theme }) => theme.colors.primary.base};
    width: 3.5rem;
    height: 3.5rem;
  `,
};

export const Loader = styled.div<{ $size: 'small' | 'medium' | 'large' }>`
  border: 0.25rem solid ${({ theme }) => theme.colors.gray.lightest};
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  ${({ $size }) => loaderSizes[$size]}
`;

const rotateOne = keyframes`
{
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
} 
`;

const rotateTwo = keyframes`
{
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
} 
`;

const rotateThree = keyframes`
{
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
} 
`;

const animatedLoaderSizes: LoaderSizes = {
  small: css`
    top: calc(50% - 1rem);
    left: calc(50% - 1rem);
    width: 2rem;
    height: 2rem;
  `,
  medium: css`
    top: calc(50% - 2rem);
    left: calc(50% - 2rem);
    width: 4rem;
    height: 4rem;
  `,
  large: css`
    top: calc(50% - 3rem);
    left: calc(50% - 3rem);
    width: 6rem;
    height: 6rem;
  `,
};

export const AnimatedLoader = styled.div<{
  $size: 'small' | 'medium' | 'large';
}>`
  position: absolute;
  border-radius: 50%;
  perspective: 800px;

  ${({ $size }) => animatedLoaderSizes[$size]}
`;

const inner = css`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const InnerOne = styled.div`
  ${inner}
  left: 0%;
  top: 0%;
  animation: ${rotateOne} 1s linear infinite;
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary.base};
`;

export const InnerTwo = styled.div`
  ${inner}
  right: 0%;
  top: 0%;
  animation: ${rotateTwo} 1s linear infinite;
  border-right: 3px solid ${({ theme }) => theme.colors.primary.base};
`;

export const InnerThree = styled.div`
  ${inner}
  right: 0%;
  bottom: 0%;
  animation: ${rotateThree} 1s linear infinite;
  border-top: 3px solid ${({ theme }) => theme.colors.primary.base};
`;
