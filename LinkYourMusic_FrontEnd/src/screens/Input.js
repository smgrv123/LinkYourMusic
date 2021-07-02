import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Input = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Navi 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
