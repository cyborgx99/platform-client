import { gql } from '@apollo/client';

export const GET_LESSON_CONTENTS = gql`
  query getLessonContents(
    $offset: Int!
    $limit: Int!
    $search: String
    $sortOrder: SortOrder
  ) {
    getLessonContents(
      offset: $offset
      limit: $limit
      search: $search
      sortOrder: $sortOrder
    ) {
      data {
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
      totalCount
      hasMore
    }
  }
`;
