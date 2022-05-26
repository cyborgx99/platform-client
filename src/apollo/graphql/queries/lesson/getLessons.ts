import { gql } from '@apollo/client';
import { LESSON_CONTENT_FIELDS } from 'apollo/graphql/fragments/lessonContentFields';
import { LESSON_IMAGE_FIELDS } from 'apollo/graphql/fragments/lessonImageFields';

export const GET_LESSONS = gql`
  query getLessons(
    $offset: Int!
    $limit: Int!
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
            ...LessonImageFields
          }
          lessonContent {
            ...LessonContentFields
          }
        }
      }
      totalCount
      pages
      hasMore
    }
  }

  ${LESSON_CONTENT_FIELDS}
  ${LESSON_IMAGE_FIELDS}
`;
