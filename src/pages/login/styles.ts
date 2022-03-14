import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  ${({ theme }) => theme.typography.normalText.regular}
`;

export const StyledParagraph = styled.p`
  ${({ theme }) => theme.typography.normalText.regular}
`;
