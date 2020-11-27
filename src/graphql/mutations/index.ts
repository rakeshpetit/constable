import gql from 'graphql-tag';

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(data: {email: $email, password: $password}) {
      token
    }
  }
`;

const REGISTER_USER = gql`
  mutation RegisterUser($email: String!, $name: String!, $password: String!) {
    createUser(data: {email: $email, name: $name, password: $password}) {
      token
    }
  }
`;

export {LOGIN_USER, REGISTER_USER};
