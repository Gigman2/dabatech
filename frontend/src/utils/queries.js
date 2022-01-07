import { gql } from 'apollo-boost';

export const GET_USER = gql`
  {
    getUser {
      id,
      name,
      email,
      phone,
      avatar,
      bio,
    }
  }
`;

export const REGISTER = gql`
  mutation($email: String, $password: String) {
    register (payload:{email: $email, password: $password}){
      email
      token
    }
  }
`;

export const LOGIN = gql`
  mutation($email: String, $password: String) {
    login (payload:{email: $email, password: $password}){
      name
      email
      token
      phone,
      bio
    }
  }
`;