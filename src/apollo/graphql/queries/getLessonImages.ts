import { gql } from '@apollo/client';

export const GET_LESSON_IMAGES = gql`
  query getLessonImages($offset: Float!, $limit: Float!) {
    getLessonImages(offset: $offset, limit: $limit) {
      data {
        id
        title
        url
        publicId
      }
    }
  }
`;
