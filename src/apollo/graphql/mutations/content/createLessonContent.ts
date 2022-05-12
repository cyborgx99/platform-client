import { gql } from '@apollo/client';

export const CREATE_LESSON_CONTENT = gql`
  mutation createLessonContent($input: CreateLessonContentInput!) {
    createLessonContent(input: $input) {
      id
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
