import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const NavigationContainer = styled.nav<{ $isShown: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 10rem;
  background-color: ${({ theme }) => theme.colors.gray};
  left: 0;
  transform: ${({ $isShown }) =>
    $isShown ? 'translate(0, 0)' : 'translate(-100%, 0)'};
  transition: transform 0.5s ease-out;
  padding: 1rem;
`;

export const NavigationTopPart = styled.div`
  display: flex;
  height: max-content;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationLinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: capitalize;
  width: max-content;
`;

export const LinkText = styled.span<{ $isActive: boolean }>`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    `}
`;
