import { gql } from '@apollo/client';

export const GET_LESSONS = gql`
  query getLessons(
    $offset: Float!
    $limit: Float!
    $search: String
    $sortOrder: SortOrder
  ) {
    getLessons(
      offset: $offset
      limit: $limit
      search: $search
      sortOrder: $sortOrder
    ) {
      data {
        id
        title
        description
        pages {
          id
          lessonImage {
            id
            title
            url
            publicId
          }
          lessonContent {
            id
            title
            sentences {
              id
              text
              sentenceParts {
                partType
                part
                id
              }
              sentenceType
            }
          }
        }
        createdAt
      }
      totalCount
      pages
      hasMore
    }
  }
`;
