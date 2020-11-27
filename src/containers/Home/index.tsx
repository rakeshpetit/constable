import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {posts_posts} from '../../graphql/queries/types/posts';
import {useGetPosts} from '../../hooks';
import styles from './styles';

const Home = ({navigation}: any) => {
  const posts: posts_posts[] = useGetPosts();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Constable</Text>
      <FlatList
        data={posts}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item}) => {
          const body = `${item.body.slice(0, 70)}...`;
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Post', {post: item});
              }}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.postBody}>{body}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;
