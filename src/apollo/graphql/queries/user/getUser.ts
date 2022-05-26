import { gql } from '@apollo/client';
import { USER_FIELDS } from 'apollo/graphql/fragments/userFields';

export const GET_USER = gql`
  query getUser {
    getUser {
      ...UserFields
    }
  }

  ${USER_FIELDS}
`;
