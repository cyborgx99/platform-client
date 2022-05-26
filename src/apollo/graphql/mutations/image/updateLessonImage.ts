import { gql } from '@apollo/client';
import { LESSON_IMAGE_FIELDS } from 'apollo/graphql/fragments/lessonImageFields';

export const UPDATE_LESSON_IMAGE = gql`
  mutation updateLessonImage($input: UpdateLessonImageInput!) {
    updateLessonImage(input: $input) {
      ...LessonImageFields
    }
  }

  ${LESSON_IMAGE_FIELDS}
`;
