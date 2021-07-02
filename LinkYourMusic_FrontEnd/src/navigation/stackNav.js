import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Input from '../screens/Input';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Input} name="Input" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
