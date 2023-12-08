import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppIcons} from '../Helper/Images';
import Feather from 'react-native-vector-icons/Feather';

export const SearchIcon = props => {
  const [Splash, setSplash] = useState(true);

  return (
    <View
      style={{
        height: 35,
        backgroundColor: '#E7ECF0',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 20,
      }}>
      <TextInput
        style={{fontSize: 12}}
        placeholder={props.placeholder || 'Search Twitter'}
        placeholderTextColor={'#687684'}
      />
    </View>
  );
};

export default SearchIcon;
