import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Input');
        }}>
        <Text>Navi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
