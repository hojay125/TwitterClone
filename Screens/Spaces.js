import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  Modal,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppIcons} from '../Helper/Images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchIcon from '../Components/SearchIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Spaces = props => {
  const [Splash, setSplash] = useState(true);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: '3%',
          paddingVertical: '3%',
        }}>
        <Pressable
          onPress={() => props.navigation.goBack()}
          style={{
            width: '15%',
            justifyContent: 'center',
          }}>
          <MaterialIcons name="arrow-back" size={22} color={'black'} />
        </Pressable>
        <View
          style={{
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
            Spaces
          </Text>
        </View>
        <Pressable
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}></Pressable>
      </View>
      <ScrollView>
        <View style={{paddingHorizontal: '4%'}}>
          <SearchIcon placeholder={'Search for a Space'} />
          <Text
            style={{
              fontSize: 20,
              color: '#000000',
              fontWeight: '700',
              marginTop: 20,
            }}>
            Spaces just for you
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#687684',
              fontWeight: '700',
              marginTop: 3,
            }}>
            People you follow are tunning in now
          </Text>
        </View>
      </ScrollView>
      <Pressable
        onPress={() => props.navigation.navigate('')}
        style={{
          height: 55,
          width: 55,
          backgroundColor: 'purple',
          borderRadius: 50,
          marginBottom: '10%',
          marginLeft: '83%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesome5 name="microphone-alt" size={25} color={'#FFFFFF'} />
      </Pressable>
    </SafeAreaView>
  );
};

export default Spaces;
