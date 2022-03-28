import styled from 'styled-components';
import { SpanBase } from 'styles/globalStyles';

export const UploadButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

export const FileInput = styled.input`
  display: none;
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ValidationErrorMessage = styled(SpanBase)`
  color: ${({ theme }) => theme.colors.red.base};
`;
