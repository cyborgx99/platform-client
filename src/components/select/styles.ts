import {
  AsyncPaginate,
  WithAsyncPaginateType,
} from 'react-select-async-paginate';
import styled, {
  css,
  DefaultTheme,
  StyledComponent,
} from 'styled-components/macro';
import { SpanBase } from 'styles/globalStyles';

export const paginageClassNamePrefix = 'select';

const border = css`
  border: 2px solid ${({ theme }) => theme.colors.secondary.light};
`;

const borderError = css`
  border: 2px solid ${({ theme }) => theme.colors.red.light};
`;

const outline = css`
  outline: 2px solid ${({ theme }) => theme.colors.secondary.darkest} !important;
`;

const outlineError = css`
  outline: 2px solid ${({ theme }) => theme.colors.red.darkest} !important;
`;

export const StyledAsync: StyledComponent<
  WithAsyncPaginateType,
  DefaultTheme,
  {
    $hasError?: boolean | undefined;
  },
  string
> = styled(AsyncPaginate)<{ $hasError?: boolean }>`
  & .${paginageClassNamePrefix}__control {
    ${({ $hasError }) => ($hasError ? borderError : border)};
    & :hover {
      ${({ $hasError }) => ($hasError ? borderError : border)};
    }
  }

  & .${paginageClassNamePrefix}__control--is-focused {
    ${({ $hasError }) => ($hasError ? outlineError : outline)};
    box-shadow: none;
  }

  & .${paginageClassNamePrefix}__option--is-focused {
    background-color: ${({ theme }) => theme.colors.secondary.lighter};
  }

  & .${paginageClassNamePrefix}__option--is-selected {
    background-color: ${({ theme }) => theme.colors.secondary.base};
  }
`;

export const ValidationErrorMessage = styled(SpanBase)`
  color: ${({ theme }) => theme.colors.red.base};
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`;
