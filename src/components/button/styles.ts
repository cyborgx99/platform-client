import styled, { css } from 'styled-components';

import { ButtonVariantStyle, ButtonWidthStyle } from './types';

const types: ButtonVariantStyle = {
  primary: css`
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.primary.base};
    background-color: ${({ theme }) => theme.colors.primary.base};
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primary.darkest};
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary.darkest};
      background-color: ${({ theme }) => theme.colors.primary.light};
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.secondary.base};
    background-color: ${({ theme }) => theme.colors.secondary.base};
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.secondary.darkest};
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.secondary.darkest};
      background-color: ${({ theme }) => theme.colors.secondary.light};
    }
  `,
  textOnly: css`
    color: ${({ theme }) => theme.colors.black.base};
    border: 2px solid ${({ theme }) => theme.colors.gray.base};
    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
      cursor: pointer;
      border: 2px solid ${({ theme }) => theme.colors.gray.darkest};
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.gray.darkest};
    }
  `,
};

const buttonWidth: ButtonWidthStyle = {
  min: css`
    min-width: 7rem;
  `,
  full: css`
    width: 100%;
  `,
};

export const StyledButton = styled.button<{
  $variant: 'primary' | 'secondary' | 'textOnly';
  $width: 'min' | 'full';
}>`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 48px;

  ${({ $width }) => buttonWidth[$width]};

  ${({ $variant }) => types[$variant]}

  ${({ theme }) => theme.typography.normalText.regular}
`;
