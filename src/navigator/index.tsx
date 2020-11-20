import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../containers/Home';
import Post from '../containers/Post';
import client from '../apolloClient';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client()}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default Navigator;
