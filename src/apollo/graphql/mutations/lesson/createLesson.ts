import { gql } from '@apollo/client';

export const CREATE_LESSON = gql`
  mutation createLesson($input: CreateLessonInput!) {
    createLesson(input: $input) {
      id
      title
      description
      createdAt
      pages {
        lessonImage {
          id
          title
          url
          publicId
        }
        lessonContent {
          id
          title
          sentences {
            sentenceType
            sentenceParts {
              id
              part
              partType
            }
            text
            id
          }
        }
      }
    }
  }
`;
