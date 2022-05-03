import styled from 'styled-components/macro';

export const PageErrorWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageErrorContent = styled.div`
  max-width: 25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;
