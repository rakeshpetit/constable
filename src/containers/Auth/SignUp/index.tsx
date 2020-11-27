import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useRegister} from '../../../hooks';
import styles from './styles';

const SignUp = ({navigation}: any) => {
  const [fields, setFields] = useState({
    email: '',
    name: '',
    password: '',
  });

  const {registerPress} = useRegister();

  const onRegisterPress = async () => {
    const data = await registerPress(fields);
    if (data) {
      navigation.pop();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.postTitle}>Name:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(name) => {
            setFields({...fields, name});
          }}
          textContentType="name"
          keyboardType="name-phone-pad"
          value={fields.name}
          placeholder={'John Doe'}
        />
      </View>
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
      <TouchableOpacity onPress={onRegisterPress} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
