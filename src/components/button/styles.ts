import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.secondary.main};
    background-color: ${({ theme }) => theme.colors.primary.active};
  }

  ${({ theme }) => theme.typography.regularText}
`;
