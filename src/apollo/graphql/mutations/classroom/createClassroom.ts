import { gql } from '@apollo/client';

export const CREATE_CLASSROOM = gql`
  mutation createClassroom($input: CreateClassroomInput!) {
    createClassroom(input: $input) {
      id
      title
      user {
        id
        name
        lastName
        email
        role
        createdAt
      }
      lesson {
        id
        title
        description
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
          id
        }
        createdAt
      }
      notes
      createdAt
    }
  }
`;
