import { PartType } from 'apollo/graphql/generated.types';
import styled, { css } from 'styled-components';
import { CssStyleProp } from 'styles/types';

export const ContentTabWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CreateContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DisplaySentencesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 15rem;
  overflow-y: auto;
`;

export const SentenceDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black.base};
`;

export const MultiDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  gap: 0.5rem;
`;

export const MultiDisplayOptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SpanWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem;
  gap: 0.25rem;
`;

export const MultiInputsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  & > div {
    flex: 1;
  }
`;

const spanStyles: Partial<Record<PartType, CssStyleProp>> = {
  Gap: css`
    border-bottom-color: ${({ theme }) => theme.colors.green.base};
    color: ${({ theme }) => theme.colors.green.darkest};
  `,
  RightAnswer: css`
    padding: 0.1rem 0.25rem;
    border: 2px solid ${({ theme }) => theme.colors.green.base};
  `,
  WrongAnswer: css`
    padding: 0.1rem 0.25rem;
    border: 2px solid ${({ theme }) => theme.colors.yellow.base};
  `,
};

export const StyledFormSpan = styled.span<{ $type: PartType }>`
  cursor: pointer;
  border: 2px solid transparent;

  ${({ $type }) => spanStyles[$type]}
`;
