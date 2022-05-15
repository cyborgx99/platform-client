import { gql } from '@apollo/client';

export const UPDATE_CLASSROOM = gql`
  mutation updateClassroom($input: UpdateClassroomInput!) {
    updateClassroom(input: $input) {
      id
      title
      lesson {
        id
        title
        description
        pages {
          lessonImage {
            title
            id
            url
            publicId
          }
          lessonContent {
            id
            sentences {
              text
              id
              sentenceParts {
                partType
                part
                id
              }
              sentenceType
            }
            title
          }
          id
        }
        createdAt
      }
      user {
        id
        name
        lastName
        email
        createdAt
      }
      notes
    }
  }
`;
