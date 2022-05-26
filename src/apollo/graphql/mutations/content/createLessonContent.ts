import { gql } from '@apollo/client';
import { LESSON_CONTENT_FIELDS } from 'apollo/graphql/fragments/lessonContentFields';

export const CREATE_LESSON_CONTENT = gql`
  mutation createLessonContent($input: CreateLessonContentInput!) {
    createLessonContent(input: $input) {
      ...LessonContentFields
    }
  }

  ${LESSON_CONTENT_FIELDS}
`;
