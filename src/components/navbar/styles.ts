import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const deleteIconStyle = css`
  width: 1.3rem;
  height: 1.3rem;
  path {
    fill: ${({ theme }) => theme.colors.gray.base};
  }

  :hover {
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const NavigationContainer = styled.nav<{ $isShown: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 14rem;
  background-color: ${({ theme }) => theme.colors.black.dark};
  left: 0;
  transform: ${({ $isShown }) =>
    $isShown ? 'translate(0, 0)' : 'translate(-100%, 0)'};
  transition: transform 0.5s ease-out;
  padding: 1rem;
  padding-top: 0;
  z-index: 1;
`;

export const NavigationTopPart = styled.div`
  display: flex;
  height: max-content;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 0;
`;

export const NavigationLinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: capitalize;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: 0.5rem 0;
  display: flex;
`;

export const LinkText = styled.span<{ $isActive: boolean }>`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  position: relative;
  padding: 0 0.25rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    transform: scaleY(0);
    background-color: ${({ theme }) => theme.colors.primary.darkest};
    z-index: -1;
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }

  &:hover {
    &::before {
      transform: scaleY(1);
      width: 100%;
    }
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      &::before {
        transform: scaleY(1);
        width: 100%;
      }
    `}

  ${({ theme }) => theme.typography.normalText.medium}
`;
