import styled, { css } from 'styled-components';

export const showIconStyles = css`
  margin-right: auto;
`;

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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const PageFooter = styled.footer`
  min-height: 1rem;
  background-color: ${({ theme }) => theme.colors.black.dark};
  padding: 1rem;
  border-top: 2px solid ${({ theme }) => theme.colors.gray.base};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledPageHeader = styled.header`
  min-height: 1rem;
  padding: 0.75rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray.base};
  background-color: ${({ theme }) => theme.colors.white};
  gap: 2rem;
`;
