import styled, { css } from 'styled-components/macro';

export const LessonTabWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 1rem;
`;

export const iconContainerStyle = css`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    height: 2.25rem;
    width: 2.25rem;
    transition: transform 0.2s ease-in-out;

    path {
      fill: ${({ theme }) => theme.colors.secondary.base};
    }
  }

  &:hover {
    & svg {
      cursor: pointer;
      transform: scale(1.1125);

      path {
        cursor: pointer;
        fill: ${({ theme }) => theme.colors.secondary.darkest};
      }
    }
  }
`;

export const TopPart = styled.div``;
