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
      fill: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;

    path {
      fill: ${({ theme }) => theme.colors.primary};
    }

    ${({ $iconStyle }) => $iconStyle}
  }
  ${({ $iconContainerStyle }) => $iconContainerStyle}
`;
