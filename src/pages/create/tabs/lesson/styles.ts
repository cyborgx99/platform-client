import { InView } from 'react-intersection-observer';
import styled, { css } from 'styled-components/macro';
import { FormBase, SpanBase } from 'styles/globalStyles';

export const LessonSearchWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
`;

export const StyledlessonForm = styled(FormBase)`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  width: 100%;
`;

export const PageCardWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-direction: column;

  > * {
    flex: 1;
  }
`;

export const cardContainerStyles = css`
  margin-bottom: 0.5rem;
`;

export const PageTopWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const trashIconStyles = css`
  > svg {
    width: 1.25rem;
    height: 1.25rem;

    path {
      fill: ${({ theme }) => theme.colors.red.base};
    }

    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.red.darkest};
      }
    }
  }
`;

export const LessonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 1rem;
`;

export const DeleteLessonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const StyledInView = styled(InView)`
  text-align: center;
  margin-top: 0.5rem;
`;
