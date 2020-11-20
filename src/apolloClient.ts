import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJja2hxYXZyOHcwMDE1MDkwNmE1b2JlcnQyIiwiaWF0IjoxNjA1ODc4OTgwfQ.QraZwTfMCwVeJPrZ4ynjsLLA-XlhdZsV2ITFgqkZG7s';

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: 'http://localhost:4000/',
});

const client = () => {
  const instance = new ApolloClient({
    cache,
    link,
    uri: 'http://localhost:4000',

    // request: (operation: Context) => {
    //   operation.setContext({
    //     headers: {
    //       Authorization: `bearer ${token}`,
    //     },
    //   });
    // },
  });
  return instance;
};
export default client;
