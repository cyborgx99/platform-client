import { Form } from 'formik';
import styled from 'styled-components';
import { SpanBase } from 'styles/globalStyles';

export const StyledForm = styled(Form)`
  padding: 0.5rem;
`;

export const ErrorMessage = styled(SpanBase)`
  color: ${({ theme }) => theme.colors.red.base};
`;
