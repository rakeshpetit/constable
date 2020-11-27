import {useQuery, useMutation} from '@apollo/react-hooks';
import {PUBLISHED_POSTS} from '../graphql/queries';
import {LOGIN_USER} from '../graphql/mutations';
import {LoginUserVariables} from '../graphql/mutations/types/LoginUser';

const useGetPosts = () => {
  const {loading, error, data} = useQuery(PUBLISHED_POSTS);
  if (loading || error) {
    return false;
  } else if (data) {
    return data;
  }
};

const useLogin = () => {
  const [loginUser, {error, loading}] = useMutation(LOGIN_USER);
  const loginPress = ({email, password}: LoginUserVariables) => {
    return loginUser({
      variables: {
        email,
        password,
      },
    })
      .then(({data}) => {
        if (data) {
          return data.login.token;
        } else if (error) {
          return error;
        } else if (loading) {
          return true;
        }
      })
      .catch((err) => err);
  };
  return {loginPress};
};

export {useGetPosts, useLogin};
