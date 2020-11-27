import {useQuery, useMutation} from '@apollo/react-hooks';
import {PUBLISHED_POSTS} from '../graphql/queries';
import {LOGIN_USER} from '../graphql/mutations';
import {posts_posts} from '../graphql/queries/types/posts';
import {LoginUserVariables} from '../graphql/mutations/types/LoginUser';

const useGetPosts = (): posts_posts[] => {
  const {loading, error, data} = useQuery(PUBLISHED_POSTS);
  if (loading || error) {
    return [];
  } else if (data) {
    return data;
  }
  return [];
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
