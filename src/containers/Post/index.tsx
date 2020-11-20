import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Post = ({route}) => {
  const {post} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postBody}>{post.body}</Text>
    </View>
  );
};

export default Post;
