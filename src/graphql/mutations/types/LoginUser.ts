/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_login {
  __typename: "AuthPayload";
  token: string;
}

export interface LoginUser {
  login: LoginUser_login;
}

export interface LoginUserVariables {
  email: string;
  password: string;
}
