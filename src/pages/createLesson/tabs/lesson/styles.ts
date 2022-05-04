import styled from 'styled-components/macro';
import { FormBase, SpanBase } from 'styles/globalStyles';

export const LessonSearchWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const StyledlessonForm = styled(FormBase)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const idealSize = '5rem';
const maxColumns = 2;
const gap = '0.5rem';

export const SelectImageContainer = styled.div`
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(max(100% / ${maxColumns} - ${gap}, ${idealSize}), 100%), 1fr)
  );
  gap: ${gap};
  overflow: auto;
  min-height: 13rem;
  max-height: 26rem;
`;

export const NoItemsWrapper = styled.div`
  justify-self: center;
  align-self: center;
`;

export const ValidationErrorMessage = styled(SpanBase)`
  color: ${({ theme }) => theme.colors.red.base};
`;

export const LessonPageWrapper = styled.div`
  margin: 0.5rem 0;
`;

export const PageCardWrapper = styled.div`
  display: flex;
  gap: 0.25rem;

  > * {
    flex: 1;
  }
`;
