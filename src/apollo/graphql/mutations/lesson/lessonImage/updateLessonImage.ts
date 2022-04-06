import { gql } from '@apollo/client';

export const UPDATE_LESSON_IMAGE = gql`
  mutation updateLessonImage($input: UpdateLessonImageInput!) {
    updateLessonImage(input: $input) {
      id
      title
      url
      publicId
    }
  }
`;
