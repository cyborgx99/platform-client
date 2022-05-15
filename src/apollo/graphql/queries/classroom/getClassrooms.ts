import { gql } from '@apollo/client';

export const GET_CLASSROOMS = gql`
  query getClassrooms(
    $offset: Int!
    $limit: Int!
    $search: String
    $sortOrder: SortOrder
  ) {
    getClassrooms(
      offset: $offset
      limit: $limit
      search: $search
      sortOrder: $sortOrder
    ) {
      data {
        id
        title
        user {
          id
          lastName
          name
          email
          role
          createdAt
        }
        lesson {
          id
          title
          description
          pages {
            id
            lessonImage {
              title
              id
              publicId
              url
            }
            lessonContent {
              id
              title
              sentences {
                id
                sentenceParts {
                  part
                  id
                  partType
                }
                text
                sentenceType
              }
            }
          }
          createdAt
        }
        notes
        createdAt
      }
      pages
      totalCount
      hasMore
    }
  }
`;
