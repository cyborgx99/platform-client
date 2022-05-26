import { gql } from '@apollo/client';

export const LESSON_CONTENT_FIELDS = gql`
  fragment LessonContentFields on LessonContent {
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
`;
