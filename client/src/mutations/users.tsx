import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser($uid: ID!, $input: UserInput) {
    updateUser(uid: $uid, input: $input) {
      name
    }
  }
`;
