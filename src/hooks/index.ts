import {useQuery} from '@apollo/react-hooks';
import {PUBLISHED_POSTS} from '../queries';

const useGetPosts = () => {
  const {loading, error, data} = useQuery(PUBLISHED_POSTS);
  if (loading || error) {
    return false;
  } else if (data) {
    return data;
  }
};

export {useGetPosts};
