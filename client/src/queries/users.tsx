import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      name
      email
      activated
      avatar
    }
  }
`;

export const GET_ACTIVE_USERS_IMG = gql`
  query {
    getActiveUsers {
      avatar
    }
  }
`;
