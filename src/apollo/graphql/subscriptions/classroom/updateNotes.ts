import { gql } from '@apollo/client';

export const UPDATE_NOTES_SUBSCRIPTION = gql`
  subscription changeNotes($classroomId: String!) {
    changeNotes(classroomId: $classroomId) {
      classroomId
      notes
    }
  }
`;
