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
`;

const spanStyles: Partial<Record<PartType, CssStyleProp>> = {
  Gap: css`
    border-bottom: 2px solid ${({ theme }) => theme.colors.green.base};
    color: ${({ theme }) => theme.colors.green.darkest};
  `,
};

export const StyledGapSpan = styled.span<{ $type: PartType }>`
  margin: 0 0.25rem;
  cursor: pointer;

  ${({ $type }) => spanStyles[$type]}
`;
