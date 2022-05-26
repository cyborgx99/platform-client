import { gql } from '@apollo/client';
import { LESSON_IMAGE_FIELDS } from 'apollo/graphql/fragments/lessonImageFields';

export const GET_LESSON_IMAGES = gql`
  query getLessonImages(
    $offset: Int!
    $limit: Int!
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
        ...LessonImageFields
      }
      totalCount
      hasMore
    }
  }

  ${LESSON_IMAGE_FIELDS}
`;
