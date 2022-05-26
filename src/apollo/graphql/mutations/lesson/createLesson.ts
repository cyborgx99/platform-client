import { gql } from '@apollo/client';
import { LESSON_CONTENT_FIELDS } from 'apollo/graphql/fragments/lessonContentFields';
import { LESSON_IMAGE_FIELDS } from 'apollo/graphql/fragments/lessonImageFields';

export const CREATE_LESSON = gql`
  mutation createLesson($input: CreateLessonInput!) {
    createLesson(input: $input) {
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
  }

  ${LESSON_IMAGE_FIELDS}
  ${LESSON_CONTENT_FIELDS}
`;
