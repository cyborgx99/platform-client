import styled, { FlattenSimpleInterpolation } from 'styled-components';

export const IconContainer = styled.div<{
  $iconStyle?: FlattenSimpleInterpolation;
  $iconContainerStyle?: FlattenSimpleInterpolation;
}>`
  display: flex;
  width: max-content;

  & :hover {
    cursor: pointer;

    path {
      fill: ${({ theme }) => theme.colors.primary.hover};
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;

    path {
      fill: ${({ theme }) => theme.colors.primary.main};
    }

    ${({ $iconStyle }) => $iconStyle}
  }
  ${({ $iconContainerStyle }) => $iconContainerStyle}
`;
