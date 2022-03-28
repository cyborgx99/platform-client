import { gql } from '@apollo/client';

export const CREATE_LESSON = gql`
  mutation createLesson($input: CreateLessonInput!) {
    createLesson(input: $input) {
      id
      image {
        id
        url
        publicId
      }
      title
      description
      content
      createdAt
    }
  }
`;
