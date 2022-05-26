import { gql } from '@apollo/client';
import { LESSON_CONTENT_FIELDS } from 'apollo/graphql/fragments/lessonContentFields';

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
        ...LessonContentFields
      }
      totalCount
      hasMore
    }
  }

  ${LESSON_CONTENT_FIELDS}
`;
