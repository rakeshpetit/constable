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

export {PUBLISHED_POSTS};
