import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppIcons} from '../Helper/Images';

export const Splash = props => {
  const [Splash, setSplash] = useState(true);

  const getdetails = () => {
    setSplash(false);
    props.navigation.navigate('Pages');
  };

  useEffect(() => {
    setTimeout(() => getdetails(), 1000);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image style={{height: 70, width: 70}} source={AppIcons.Xwhite} />
    </SafeAreaView>
  );
};

export default Splash;
