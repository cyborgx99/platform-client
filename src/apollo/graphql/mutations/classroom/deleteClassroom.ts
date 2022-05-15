import { gql } from '@apollo/client';

export const DELETE_CLASSROOM = gql`
  mutation deleteClassroom($id: String!) {
    deleteClassroom(id: $id) {
      id
    }
  }
`;
