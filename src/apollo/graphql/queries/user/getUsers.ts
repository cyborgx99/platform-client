import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsers(
    $offset: Int!
    $limit: Int!
    $search: String
    $sortOrder: SortOrder
  ) {
    getUsers(
      offset: $offset
      limit: $limit
      search: $search
      sortOrder: $sortOrder
    ) {
      data {
        id
        name
        lastName
        email
      }
      pages
      totalCount
      hasMore
    }
  }
`;
