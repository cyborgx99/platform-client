import styled, { css } from 'styled-components';

import {
  StyledSpanTextColors,
  StyledSpanTextColorTypes,
  StyledSpanTextTypes,
} from './types';

const textColors: StyledSpanTextColors = {
  error: css`
    ${({ theme }) => theme.colors.error.main}
  `,
  dark: css`
    ${({ theme }) => theme.colors.text}
  `,
  white: css`
    ${({ theme }) => theme.colors.white}
  `,
};

export const StyledSpan = styled.span<{
  $textType: StyledSpanTextTypes;
  $textColor: StyledSpanTextColorTypes;
}>`
  ${({ theme, $textType }) => theme.typography[$textType]};
  color: ${({ $textColor }) => textColors[$textColor]};
`;
