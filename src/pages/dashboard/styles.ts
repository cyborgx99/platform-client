import styled, { css } from 'styled-components';
import { LinkBase } from 'styles/globalStyles';

export const NavigatorContainer = styled.div`
  max-width: 25rem;
  width: 100%;
  border-radius: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primary.base};
  box-shadow: 0 0 1.5pt 1pt ${({ theme }) => theme.colors.primary.base};
  margin: 1rem;
`;

const shapes = {
  left: css`
    border-top-left-radius: 48px;
    border-bottom-left-radius: 48px;
  `,
  middle: css``,
  right: css`
    border-top-right-radius: 48px;
    border-bottom-right-radius: 48px;
  `,
};

export const DashboardContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 0.75rem;
`;

export const DashboardContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const DashboardLink = styled(LinkBase)<{
  $type: 'left' | 'middle' | 'right';
  $isActive: boolean;
}>`
  flex: 1;
  border: 3px solid transparent;
  padding: 0.25rem;
  text-transform: capitalize;
  text-align: center;
  transition: background-color 0.5 ease-in-out;

  &:hover {
    text-decoration: none;
  }

  ${({ $isActive }) =>
    $isActive
      ? css`
          background-color: ${({ theme }) => theme.colors.primary.base};
          color: ${({ theme }) => theme.colors.white};

          :hover {
            background-color: ${({ theme }) => theme.colors.primary.darkest};
            color: ${({ theme }) => theme.colors.white};
          }
        `
      : css`
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.primary.base};
        `}
  ${({ $type }) => shapes[$type]};
`;
