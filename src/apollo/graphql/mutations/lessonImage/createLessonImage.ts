import { gql } from '@apollo/client';

export const CREATE_LESSON_IMAGE = gql`
  mutation createLessonImage($input: CreateLessonImageInput!) {
    createLessonImage(input: $input) {
      id
      title
      url
      publicId
    }
  }
`;
