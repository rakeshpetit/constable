/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: posts
// ====================================================

export interface posts_posts_author {
  __typename: "User";
  name: string;
}

export interface posts_posts {
  __typename: "Post";
  id: string;
  title: string;
  body: string;
  published: boolean;
  author: posts_posts_author;
}

export interface posts {
  posts: posts_posts[];
}
