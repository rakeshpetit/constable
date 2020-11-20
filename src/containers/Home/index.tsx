import React from 'react';
import {View, Text} from 'react-native';
import {useGetPosts} from '../../hooks';

const Home = () => {
  const posts = useGetPosts();
  console.log('po', posts);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
