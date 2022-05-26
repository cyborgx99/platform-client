import { gql } from '@apollo/client';
import { LESSON_CONTENT_FIELDS } from 'apollo/graphql/fragments/lessonContentFields';
import { LESSON_IMAGE_FIELDS } from 'apollo/graphql/fragments/lessonImageFields';

export const GET_SINGLE_CLASSROOM = gql`
  query getSingleClassroom($id: String!) {
    getSingleClassroom(id: $id) {
      id
      title
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
  }

  ${LESSON_IMAGE_FIELDS}
  ${LESSON_CONTENT_FIELDS}
`;
