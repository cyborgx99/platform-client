import { gql } from '@apollo/client';

export const UPDATE_LESSON_CONTENT = gql`
  mutation updateLessonContent($input: UpdateLessonContentInput!) {
    updateLessonContent(input: $input) {
      id
      title
      sentences {
        id
        text
        sentenceParts {
          id
          part
          partType
        }
        sentenceType
      }
    }
  }
`;
