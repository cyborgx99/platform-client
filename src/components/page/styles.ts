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
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

export const PageContentScrollable = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
`;

export const PageFooter = styled.footer`
  min-height: 1rem;
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: 1rem;
`;

export const PageHeader = styled.header`
  min-height: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;
