import styled, { css, keyframes } from 'styled-components';

const loading = keyframes`
  to {
    background-position-x: -20%;
  }
`;

const SkeletonStyles = css`
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    ${({ theme }) => theme.colors.gray.light};
  background-size: 200% 100%;
  background-position-x: 180%;

  animation: 1s ${loading} ease-in-out infinite;
`;

export const SkeletonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const SkeletonImage = styled.div`
  ${SkeletonStyles};
  width: 100%;
  flex-basis: 6rem;
  flex: 1;
`;

export const SkeletonContent = styled.div`
  margin-top: 0.5rem;
`;

export const SkeletonTitle = styled.h4`
  ${SkeletonStyles}
  min-height: 1.3rem;
  border-radius: 4px;
  animation-delay: 0.05s;
  margin-bottom: 0.5rem;
`;

export const SkeletonDescription = styled.div`
  ${SkeletonStyles}
  min-height: 2.5rem;
  border-radius: 4px;
  animation-delay: 0.06s;
`;
