import { gql } from '@apollo/client';
import { USER_FIELDS } from 'apollo/graphql/fragments/userFields';

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
        ...UserFields
      }
      pages
      totalCount
      hasMore
    }
  }

  ${USER_FIELDS}
`;
