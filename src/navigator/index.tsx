import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../containers/Home';
import Post from '../containers/Post';
import SignUp from '../containers/Auth/SignUp';
import SignIn from '../containers/Auth/SignIn';
import client from '../apolloClient';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client()}>
        <TabNavigator />
      </ApolloProvider>
    </NavigationContainer>
  );
};

const TabNavigator = (): React.ReactElement => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Profile" component={AuthNavigator} />
  </Tab.Navigator>
);

const HomeNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Post" component={Post} />
  </Stack.Navigator>
);

const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name="Sign In" component={SignIn} />
    <Stack.Screen name="Sign Up" component={SignUp} />
  </Stack.Navigator>
);

export default Navigator;
