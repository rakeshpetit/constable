import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import Storage from './Storage';

const sampleToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJja2hxYXZyOHcwMDE1MDkwNmE1b2JlcnQyIiwiaWF0IjoxNjA1ODc4OTgwfQ.QraZwTfMCwVeJPrZ4ynjsLLA-XlhdZsV2ITFgqkZG7s';

const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
});

const authLink = setContext((_, {headers}) => {
  const token = Storage.getSession();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = () => {
  Storage.setSession(sampleToken);
  const instance = new ApolloClient({
    cache,
    link: authLink.concat(httpLink),
    uri: 'http://localhost:4000',
  });
  return instance;
};

export default client;
