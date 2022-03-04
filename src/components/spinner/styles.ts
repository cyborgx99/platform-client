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
  border: 0.5rem solid #f3f3f3;
  border-top: 0.5rem solid #3498db;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  animation: ${spin} 1s linear infinite;
`;
