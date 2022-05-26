import { gql } from '@apollo/client';
import { LESSON_IMAGE_FIELDS } from 'apollo/graphql/fragments/lessonImageFields';

export const CREATE_LESSON_IMAGE = gql`
  mutation createLessonImage($input: CreateLessonImageInput!) {
    createLessonImage(input: $input) {
      ...LessonImageFields
    }
  }

  ${LESSON_IMAGE_FIELDS}
`;
