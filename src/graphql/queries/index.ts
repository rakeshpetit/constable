import gql from 'graphql-tag';

const PUBLISHED_POSTS = gql`
  query posts {
    posts(query: "") {
      id
      title
      body
      published
      author {
        name
      }
    }
  }
`;

const PROFILE = gql`
  query me {
    me {
      name
      email
    }
  }
`;

export {PROFILE, PUBLISHED_POSTS};
