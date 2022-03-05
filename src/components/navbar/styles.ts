import { ReactComponent as Close } from 'assets/icons/close.svg';
import styled from 'styled-components';

export const NavigationContainer = styled.nav<{ $isShown: boolean }>`
  position: absolute;
  height: 100%;
  width: 10rem;
  background-color: yellow;
  left: 0;
  transform: ${({ $isShown }) =>
    $isShown ? 'translate(0, 0)' : 'translate(-100%, 0)'};
  transition: transform 0.5s ease-out;
`;

export const CloseIcon = styled(Close)`
  width: 1.5rem;
  height: 1.5rem;
  path {
    fill: ${({ theme }) => theme.colors.primary};
  }

  & :hover {
    path {
      fill: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;
