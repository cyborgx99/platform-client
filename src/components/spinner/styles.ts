import styled, { css, keyframes } from 'styled-components';

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
    border-top: 0.25rem solid ${({ theme }) => theme.colors.primary.main};
    width: 1.7rem;
    height: 1.7rem;
  `,
  medium: css`
    border: 0.5rem solid ${({ theme }) => theme.colors.gray};
    border-top: 0.5rem solid ${({ theme }) => theme.colors.primary.main};
    width: 2.5rem;
    height: 2.5rem;
  `,
  large: css`
    border: 0.75rem solid ${({ theme }) => theme.colors.gray};
    border-top: 0.75rem solid ${({ theme }) => theme.colors.primary.main};
    width: 3.5rem;
    height: 3.5rem;
  `,
};

export const Loader = styled.div<{ $size: 'small' | 'medium' | 'large' }>`
  border: 0.25rem solid ${({ theme }) => theme.colors.gray};
  border-top: 0.25rem solid ${({ theme }) => theme.colors.primary.main};
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  ${({ $size }) => loaderSizes[$size]}
`;
