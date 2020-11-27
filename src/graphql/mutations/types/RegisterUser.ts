/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterUser
// ====================================================

export interface RegisterUser_createUser {
  __typename: "AuthPayload";
  token: string;
}

export interface RegisterUser {
  createUser: RegisterUser_createUser;
}

export interface RegisterUserVariables {
  email: string;
  name: string;
  password: string;
}
