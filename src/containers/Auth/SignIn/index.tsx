import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useLogin} from '../../../hooks';
import Profile from '../Profile';
import styles from './styles';

const SignIn = () => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const [authenticated, setAuthenticated] = useState(false);

  const {loginPress, logoutPress} = useLogin();

  const onLoginPress = async () => {
    const data = await loginPress(fields);
    if (data) {
      setAuthenticated(true);
    }
  };

  const onLogoutPress = () => {
    logoutPress();
    setAuthenticated(false);
    setFields({
      email: '',
      password: '',
    });
  };

  return authenticated ? (
    <Profile onLogoutPress={onLogoutPress} />
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.postTitle}>Email:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(email) => {
            setFields({...fields, email});
          }}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={fields.email}
          placeholder={'name@example.com'}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.postTitle}>Password:</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry
          textContentType="password"
          autoCompleteType="password"
          onChangeText={(password) => {
            setFields({...fields, password});
          }}
          value={fields.password}
          placeholder={'password'}
        />
      </View>
      <TouchableOpacity onPress={onLoginPress} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
