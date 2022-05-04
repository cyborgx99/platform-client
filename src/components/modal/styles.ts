import styled, { css, keyframes } from 'styled-components/macro';

const slideDown = keyframes`
  from {
    transform: translateY(-100vh);
  }

  to {
    transform: translateY(0);
  }

`;

const slideUp = keyframes`
  from {
    transform: translateY(0);
    
  }

  to {
    transform: translateY(-100vh);
  }

`;

export const ModalWrapper = styled.div<{ $isCloseAnimation: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem;
  margin: 2rem 0.5rem;
  border-radius: 4px;
  max-width: 25rem;
  width: 100%;
  animation: ${({ $isCloseAnimation }) =>
      $isCloseAnimation ? slideUp : slideDown}
    0.4s ease-in-out forwards;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background-color: ${({ theme }) => `${theme.colors.black.darkest}90`};
`;

export const deleteIconStyle = css`
  width: 1.3rem;
  height: 1.3rem;
  path {
    fill: ${({ theme }) => theme.colors.primary.base};
  }

  :hover {
    path {
      fill: ${({ theme }) => theme.colors.primary.darkest};
    }
  }
`;
