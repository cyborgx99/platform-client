import styled from 'styled-components';
import { HeaderThreeBase } from 'styles/globalStyles';

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray.base};
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  padding: 0.5rem;
`;

export const CardHeaderThree = styled(HeaderThreeBase)`
  margin: 0.5rem 0;
`;

export const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.0125);
  }
`;

export const ActionContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray.base};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
`;