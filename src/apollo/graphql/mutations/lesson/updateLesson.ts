import { gql } from '@apollo/client';

export const UPDATE_LESSON = gql`
  mutation updateLesson($input: UpdateLessonInput!) {
    updateLesson(input: $input) {
      id
      title
      description
      pages {
        lessonContent {
          title
          id
          sentences {
            id
            text
            sentenceParts {
              partType
              part
              id
            }
            sentenceType
          }
        }
        lessonImage {
          id
          title
          url
          publicId
        }
        id
      }
      createdAt
    }
  }
`;
