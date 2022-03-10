import styled, { FlattenSimpleInterpolation } from 'styled-components';

export const IconContainer = styled.div<{
  $iconStyle?: FlattenSimpleInterpolation;
  $iconContainerStyle?: FlattenSimpleInterpolation;
}>`
  display: flex;
  width: max-content;

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
