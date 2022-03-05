import styled, { keyframes } from 'styled-components';

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

export const Loader = styled.div`
  border: 0.5rem solid ${({ theme }) => theme.colors.gray};
  border-top: 0.5rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  animation: ${spin} 1s linear infinite;
`;
