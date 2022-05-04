import { AsyncPaginate } from 'react-select-async-paginate';
import styled from 'styled-components/macro';
import { SpanBase } from 'styles/globalStyles';

export const paginageClassNamePrefix = 'select';

export const StyledAsync = styled(AsyncPaginate)`
  & .${paginageClassNamePrefix}__control {
    border: 2px solid ${({ theme }) => theme.colors.secondary.light};
    & :hover {
      border: 2px solid ${({ theme }) => theme.colors.secondary.light};
    }
  }

  & .${paginageClassNamePrefix}__control--is-focused {
    outline: 2px solid ${({ theme }) => theme.colors.secondary.darkest} !important;
    box-shadow: none;
  }

  & .${paginageClassNamePrefix}__option--is-focused {
    background-color: ${({ theme }) => theme.colors.secondary.lighter};
  }

  & .${paginageClassNamePrefix}__option--is-selected {
    background-color: ${({ theme }) => theme.colors.secondary.base};
  }
` as typeof AsyncPaginate;

export const ValidationErrorMessage = styled(SpanBase)`
  color: ${({ theme }) => theme.colors.red.base};
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`;
