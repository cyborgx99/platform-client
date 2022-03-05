import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};

  &:focus {
    /* border: none; */
    outline: none;
    /* background-color: red; */
  }
`;
