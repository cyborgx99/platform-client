import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray};
  flex-direction: column;
`;

export const PageContent = styled.section`
  flex: 1;
  background-color: white;
`;

export const PageFooter = styled.footer`
  min-height: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
`;

export const PageHeader = styled.header`
  min-height: 1rem;
  background-color: green;
  padding: 1rem;
`;
