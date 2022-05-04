import { gql } from '@apollo/client';

export const CREATE_LESSON = gql`
  mutation createLesson($input: CreateLessonInput!) {
    createLesson(input: $input) {
      id
      title
      description
      pages {
        lessonImageId
        lessonContentId
      }
      createdAt
    }
  }
`;
