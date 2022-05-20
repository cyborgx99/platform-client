import styled, { css } from 'styled-components/macro';
import { HeaderThreeBase } from 'styles/globalStyles';
import { CssStyleProp } from 'styles/types';

const isSelected = css`
  box-shadow: ${({ theme }) => `${theme.colors.green.base}50`} 0px 1px 2px 0px,
    ${({ theme }) => `${theme.colors.green.base}30`} 0px 2px 6px 2px;
  border: 2px solid ${({ theme }) => theme.colors.green.base};
`;

export const CardContainer = styled.div<{
  $isSelected?: boolean;
  $cardContainerStyles?: CssStyleProp;
  $hasBorders?: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  ${({ $cardContainerStyles }) => $cardContainerStyles};

  ${({ $isSelected }) => $isSelected && isSelected}

  ${({ $hasBorders }) =>
    $hasBorders &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.gray.base};
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    `}
`;

export const ContentWrapper = styled.div`
  padding: 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: none;
  border: none;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.yellow.base};
  }
`;

export const CardHeaderThree = styled(HeaderThreeBase)`
  margin: 0.5rem 0;
  font-size: 1.25rem;
`;

export const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  transition: transform 0.2s ease-in-out;
  border-radius: 8px;
  flex: 1;
  max-height: 10rem;

  &:hover {
    transform: scale(1.0125);
  }
`;

export const ActionContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray.base};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
`;
