import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useGetProfile} from '../../../hooks';
import styles from './styles';

type ProfileProps = {
  onLogoutPress: () => void;
};
const Profile = ({onLogoutPress}: ProfileProps) => {
  const profile = useGetProfile();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {profile && (
        <>
          <Text style={styles.postTitle}>{`Welcome ${profile.name}`}</Text>
          <Text style={styles.postTitle}>{`Email: ${profile.email}`}</Text>
          <TouchableOpacity onPress={onLogoutPress} style={styles.button}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Profile;
