import { gql } from '@apollo/client';

export const RESET_PASSWORD_LINK = gql`
  mutation resetPasswordLink($input: CreateResetPasswordLinkInput!) {
    resetPasswordLink(input: $input) {
      success
    }
  }
`;
