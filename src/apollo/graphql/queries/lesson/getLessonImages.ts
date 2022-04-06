import { gql } from '@apollo/client';

export const GET_LESSON_IMAGES = gql`
  query getLessonImages($offset: Float!, $limit: Float!, $search: String) {
    getLessonImages(offset: $offset, limit: $limit, search: $search) {
      data {
        id
        title
        url
        publicId
      }
    }
  }
`;
