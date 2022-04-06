import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsers($offset: Float!, $limit: Float!) {
    getUsers(offset: $offset, limit: $limit) {
      totalCount
      pages
      data {
        id
        name
        lastName
        email
        role
        createdAt
      }
    }
  }
`;
