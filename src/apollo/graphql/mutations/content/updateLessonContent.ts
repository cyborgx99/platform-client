import { gql } from '@apollo/client';
import { LESSON_CONTENT_FIELDS } from 'apollo/graphql/fragments/lessonContentFields';

export const UPDATE_LESSON_CONTENT = gql`
  mutation updateLessonContent($input: UpdateLessonContentInput!) {
    updateLessonContent(input: $input) {
      ...LessonContentFields
    }
  }
  ${LESSON_CONTENT_FIELDS}
`;
