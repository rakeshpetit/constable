import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import styles from './styles';

const Post = ({route}) => {
  const {post} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.postBody}>{post.body}</Text>
      </ScrollView>
    </View>
  );
};

export default Post;
