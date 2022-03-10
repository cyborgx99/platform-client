import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary.main};
  border-radius: 2px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.active};
    border: none;
  }
`;

export const StyledLabel = styled.label`
  ${({ theme }) => theme.typography.regularText};
`;
