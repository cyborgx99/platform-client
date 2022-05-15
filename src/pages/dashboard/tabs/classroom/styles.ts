import styled from 'styled-components';
import { FormBase } from 'styles/globalStyles';

export const ClassroomSearchWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
`;

export const StyledClassroomForm = styled(FormBase)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ClassroomContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 1rem;
`;

export const DeleteClassroomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;
