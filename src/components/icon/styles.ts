import styled from 'styled-components/macro';
import { CssStyleProp } from 'styles/types';

export const IconContainer = styled.button<{
  $iconStyle?: CssStyleProp;
  $iconContainerStyle?: CssStyleProp;
  disabled: boolean;
}>`
  display: flex;
  width: max-content;
  padding: 0;
  background: none;
  border: none;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.darkest};
  }

  & :hover {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;

    :hover {
      transform: scale(0.95);
    }

    ${({ $iconStyle }) => $iconStyle}
  }
  ${({ $iconContainerStyle }) => $iconContainerStyle}
`;
