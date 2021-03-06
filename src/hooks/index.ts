import {useQuery, useMutation} from '@apollo/react-hooks';
import {PUBLISHED_POSTS, PROFILE} from '../graphql/queries';
import {LOGIN_USER, REGISTER_USER} from '../graphql/mutations';
import {posts} from '../graphql/queries/types/posts';
import {me_me} from '../graphql/queries/types/me';
import {LoginUserVariables} from '../graphql/mutations/types/LoginUser';
import {RegisterUserVariables} from '../graphql/mutations/types/RegisterUser';
import Storage from '../Storage';

const useGetPosts = (): posts | false => {
  const {loading, error, data} = useQuery(PUBLISHED_POSTS);
  if (loading || error) {
    return false;
  } else if (data) {
    return data;
  }
  return false;
};

const useGetProfile = (): me_me | false => {
  const {loading, error, data} = useQuery(PROFILE);
  if (loading || error) {
    return false;
  } else if (data) {
    return data.me;
  }
  return false;
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
          const token = data.login.token;
          Storage.setSession(token);
          return token;
        } else if (error) {
          return error;
        } else if (loading) {
          return true;
        }
      })
      .catch(() => false);
  };

  const logoutPress = () => {
    Storage.deleteSession();
  };

  return {loginPress, logoutPress};
};

const useRegister = () => {
  const [registerUser, {error, loading}] = useMutation(REGISTER_USER);
  const registerPress = ({email, name, password}: RegisterUserVariables) => {
    return registerUser({
      variables: {
        email,
        name,
        password,
      },
    })
      .then(({data}) => {
        if (data) {
          const token = data.createUser.token;
          Storage.setSession(token);
          return token;
        } else if (error) {
          return error;
        } else if (loading) {
          return true;
        }
      })
      .catch(() => false);
  };

  return {registerPress};
};

export {useGetPosts, useGetProfile, useRegister, useLogin};
