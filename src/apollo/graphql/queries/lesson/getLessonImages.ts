import { gql } from '@apollo/client';

export const GET_LESSON_IMAGES = gql`
  query getLessonImages(
    $offset: Float!
    $limit: Float!
    $search: String
    $sortOrder: SortOrder
  ) {
    getLessonImages(
      offset: $offset
      limit: $limit
      search: $search
      sortOrder: $sortOrder
    ) {
      data {
        id
        title
        url
        publicId
      }
      totalCount
      hasMore
    }
  }
`;
