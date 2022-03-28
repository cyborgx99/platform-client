import styled, { css } from 'styled-components';
import { FormBase } from 'styles/globalStyles';

export const ImageTabWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 1rem;
`;

export const StyledImageForm = styled(FormBase)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const iconContainerStyle = css`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray.base};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 18rem;

  & svg {
    height: 7.5rem;
    width: 7.5rem;
    transition: transform 0.2s ease-in-out;

    path {
      fill: ${({ theme }) => theme.colors.secondary.base};
    }
  }

  &:hover {
    & svg {
      cursor: pointer;
      transform: scale(1.0125);

      path {
        cursor: pointer;
        fill: ${({ theme }) => theme.colors.secondary.darkest};
      }
    }
  }
`;
