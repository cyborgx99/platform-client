import styled, { css } from 'styled-components';

export const IconContainer = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.green.base};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const iconStyles = css`
  width: 5rem;
  height: 5rem;
  path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const SuccessContainer = styled.div`
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
