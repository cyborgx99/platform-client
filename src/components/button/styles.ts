import styled, { css } from 'styled-components';

import {
  ButtonShape,
  ButtonShapeStyle,
  ButtonVariant,
  ButtonVariantStyle,
  ButtonWidth,
  ButtonWidthStyle,
} from './types';

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
  danger: css`
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.red.base};
    background-color: ${({ theme }) => theme.colors.red.base};
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.red.darkest};
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.red.darkest};
      background-color: ${({ theme }) => theme.colors.red.light};
    }
  `,
  success: css`
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.green.base};
    background-color: ${({ theme }) => theme.colors.green.base};
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.green.darkest};
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.green.darkest};
      background-color: ${({ theme }) => theme.colors.green.light};
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

const disabledStyle = css`
  background-color: ${({ theme }) => theme.colors.gray.base};
  border-color: ${({ theme }) => theme.colors.gray.base};
  cursor: default;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.base};
    border-color: ${({ theme }) => theme.colors.gray.base};
    cursor: default;
  }
`;

const buttonWidth: ButtonWidthStyle = {
  min: css`
    min-width: 7rem;
  `,
  full: css`
    width: 100%;
  `,
};

const buttonShape: ButtonShapeStyle = {
  circle: css`
    border-radius: 50%;
  `,
  round: css`
    border-radius: 48px;
  `,
  rectangle: css`
    border-radius: 2px;
  `,
};

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $width: ButtonWidth;
  $shape: ButtonShape;
  disabled: boolean;
}>`
  padding: 0.45rem 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $shape }) => buttonShape[$shape]};

  ${({ $width }) => buttonWidth[$width]};

  ${({ $variant }) => types[$variant]};

  ${({ theme }) => theme.typography.normalText.regular};

  ${({ disabled }) => disabled && disabledStyle};
`;
