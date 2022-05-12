import { gql } from '@apollo/client';

export const DELETE_LESSON_IMAGE = gql`
  mutation deleteLessonImage($input: DeleteLessonImageInput!) {
    deleteLessonImage(input: $input) {
      id
    }
  }
`;
