import styled from 'styled-components/macro';
import { SpanBase } from 'styles/globalStyles';

export const StyledErrorMessage = styled(SpanBase)`
  color: ${({ theme }) => theme.colors.red.base};
`;
