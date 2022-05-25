import styled from 'styled-components';
import { HeaderOneBase, HeaderTwoBase } from 'styles/globalStyles';

export const FourOFourContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const TitleWrapper = styled.div``;

export const NotFountHeader = styled(HeaderTwoBase)``;

export const NotFountCodeHeader = styled(HeaderOneBase)`
  color: ${({ theme }) => theme.colors.red.darkest};
`;
