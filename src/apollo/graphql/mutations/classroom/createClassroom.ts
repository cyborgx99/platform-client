import { gql } from '@apollo/client';
import { LESSON_CONTENT_FIELDS } from 'apollo/graphql/fragments/lessonContentFields';
import { LESSON_IMAGE_FIELDS } from 'apollo/graphql/fragments/lessonImageFields';
import { USER_FIELDS } from 'apollo/graphql/fragments/userFields';

export const CREATE_CLASSROOM = gql`
  mutation createClassroom($input: CreateClassroomInput!) {
    createClassroom(input: $input) {
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
  }

  ${USER_FIELDS}
  ${LESSON_IMAGE_FIELDS}
  ${LESSON_CONTENT_FIELDS}
`;
