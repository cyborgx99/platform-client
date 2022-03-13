import styled from 'styled-components';
import { CssStyleProp } from 'styles/types';

export const IconContainer = styled.button<{
  $iconStyle?: CssStyleProp;
  $iconContainerStyle?: CssStyleProp;
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
    cursor: pointer;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;

    ${({ $iconStyle }) => $iconStyle}
  }
  ${({ $iconContainerStyle }) => $iconContainerStyle}
`;
