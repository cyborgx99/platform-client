import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    border: none;
  }
`;

export const StyledLabel = styled.label`
  ${({ theme }) => theme.typography.regularText};
`;

export const StyledError = styled.span``;
