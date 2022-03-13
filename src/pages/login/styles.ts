import { Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SpanBase } from 'styles/globalStyles';

export const StyledForm = styled(Form)`
  padding: 0.5rem;
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => theme.typography.normalText.regular}
`;

export const StyledParagraph = styled.p`
  ${({ theme }) => theme.typography.normalText.regular}
`;

export const ErrorMessage = styled(SpanBase)`
  color: ${({ theme }) => theme.colors.red.base};
`;
