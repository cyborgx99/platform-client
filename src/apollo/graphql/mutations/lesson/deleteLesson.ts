import { gql } from '@apollo/client';

export const DELETE_LESSON = gql`
  mutation deleteLesson($id: String!) {
    deleteLesson(id: $id) {
      id
    }
  }
`;
