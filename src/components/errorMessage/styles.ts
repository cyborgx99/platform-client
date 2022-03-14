import styled from 'styled-components';
import { SpanBase } from 'styles/globalStyles';

export const StyledErrorMessage = styled(SpanBase)`
  color: ${({ theme }) => theme.colors.red.base};
`;
