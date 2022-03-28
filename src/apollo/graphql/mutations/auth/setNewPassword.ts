import { gql } from '@apollo/client';

export const SET_NEW_PASSWORD = gql`
  mutation setNewPassword($input: SetNewPasswordInput!) {
    setNewPassword(input: $input) {
      success
    }
  }
`;
