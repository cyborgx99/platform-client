import { gql } from '@apollo/client';

export const LESSON_IMAGE_FIELDS = gql`
  fragment LessonImageFields on LessonImage {
    id
    publicId
    title
    url
  }
`;
