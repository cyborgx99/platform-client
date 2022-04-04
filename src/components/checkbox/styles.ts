import styled, { css } from 'styled-components';

export const StyledLabel = styled.label`
  width: max-content;
`;

export const HiddenCheckbox = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const checked = css`
  background-color: ${({ theme }) => theme.colors.green.light};
  border: 2px solid ${({ theme }) => theme.colors.green.base};
`;

const notChecked = css`
  background-color: ${({ theme }) => theme.colors.gray.light};
  border: 2px solid ${({ theme }) => theme.colors.gray.base};

  &::after {
    opacity: 0;
  }
`;

export const DecorativeCheckbox = styled.span<{ $isChecked: boolean }>`
  height: 1.5rem;
  width: 1.5rem;
  display: block;
  position: relative;
  cursor: pointer;
  transition: background-color, border-color 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    left: 0.4rem;
    top: 0.15rem;
    width: 0.4rem;
    height: 0.9rem;
    border: solid ${({ theme }) => theme.colors.white};
    border-width: 0 2.5px 2.5px 0;
    transform: rotate(45deg);
    transition: opacity 0.3s ease-in-out;
  }

  ${({ $isChecked }) => ($isChecked ? checked : notChecked)}
`;
