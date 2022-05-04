import { gql } from '@apollo/client';

export const GET_LESSON_CONTENTS = gql`
  query getLessonContents($offset: Float!, $limit: Float!, $search: String) {
    getLessonContents(offset: $offset, limit: $limit, search: $search) {
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
