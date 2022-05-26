import { gql } from '@apollo/client';
import { LESSON_CONTENT_FIELDS } from 'apollo/graphql/fragments/lessonContentFields';
import { LESSON_IMAGE_FIELDS } from 'apollo/graphql/fragments/lessonImageFields';
import { USER_FIELDS } from 'apollo/graphql/fragments/userFields';

export const GET_CLASSROOMS = gql`
  query getClassrooms(
    $offset: Int!
    $limit: Int!
    $search: String
    $sortOrder: SortOrder
  ) {
    getClassrooms(
      offset: $offset
      limit: $limit
      search: $search
      sortOrder: $sortOrder
    ) {
      data {
        id
        title
        user {
          ...UserFields
        }
        lesson {
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
        notes
      }
      pages
      totalCount
      hasMore
    }
  }

  ${LESSON_IMAGE_FIELDS}
  ${LESSON_CONTENT_FIELDS}
  ${USER_FIELDS}
`;
