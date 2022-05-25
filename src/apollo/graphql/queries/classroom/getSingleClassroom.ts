import { gql } from '@apollo/client';

export const GET_SINGLE_CLASSROOM = gql`
  query getSingleClassroom($id: String!) {
    getSingleClassroom(id: $id) {
      id
      title
      lesson {
        id
        title
        description
        pages {
          id
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
        }
        createdAt
      }
      notes
      createdAt
    }
  }
`;
