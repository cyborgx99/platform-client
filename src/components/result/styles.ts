import styled, { css } from 'styled-components';

export const SuccessIconContainer = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green.base};
`;

export const successIconStyles = css`
  width: 5rem;
  height: 5rem;

  path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const errorIconStyles = css`
  width: 7.5rem;
  height: 7.5rem;

  path {
    fill: ${({ theme }) => theme.colors.red.base};
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  height: 100%;
  text-align: center;
  word-wrap: break-word;
  word-break: break-word;
  padding: 0.5rem;
`;
