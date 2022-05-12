import { gql } from '@apollo/client';

export const DELETE_LESSON_CONTENT = gql`
  mutation deleteLessonContent($id: String!) {
    deleteLessonContent(id: $id) {
      id
    }
  }
`;
