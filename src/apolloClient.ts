import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import Storage from './Storage';

const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
});

const authLink = setContext((_, {headers}) => {
  return Storage.getSession().then((token) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
});

const client = () => {
  const instance = new ApolloClient({
    cache,
    link: authLink.concat(httpLink),
    uri: 'http://localhost:4000',
  });
  return instance;
};

export default client;
