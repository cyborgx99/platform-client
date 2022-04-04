import { PartType } from 'apollo/graphql/generated.types';
import ReactTextareaAutosize from 'react-textarea-autosize';
import styled, { css } from 'styled-components';
import { CssStyleProp } from 'styles/types';

export const ContentTabWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledTextArea = styled(ReactTextareaAutosize)`
  resize: none;
  width: 100%;
`;

const spanStyles: Partial<Record<PartType, CssStyleProp>> = {
  Gap: css`
    border-bottom: 2px solid ${({ theme }) => theme.colors.green.base};
    color: ${({ theme }) => theme.colors.green.darkest};
  `,
  RightAnswer: css`
    border: 2px solid ${({ theme }) => theme.colors.green.base};
  `,
  WrongAnswer: css`
    border: 2px solid ${({ theme }) => theme.colors.yellow.base};
  `,
};

export const StyledGapSpan = styled.span<{ $type: PartType }>`
  cursor: pointer;
  padding: 0.2rem 0.4rem;

  ${({ $type }) => spanStyles[$type]}
`;
