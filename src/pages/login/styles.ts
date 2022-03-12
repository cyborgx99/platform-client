import { Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  padding: 0.5rem;
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => theme.typography.lightText}
`;

export const StyledParagraph = styled.p`
  ${({ theme }) => theme.typography.lightText}
`;
