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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchIcon from '../Components/SearchIcon';

export const NewMessage = props => {
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
            New message
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
        <SearchIcon placeholder={'Search for people and groups'} />
        <View style={{paddingHorizontal: '3%'}}>
          <Pressable
            style={{
              flexDirection: 'row',
              paddingVertical: 10,

              alignItems: 'center',
            }}>
            <Ionicons name="people-circle-sharp" size={32} color={'#4C9EEB'} />
            <Text style={{fontSize: 14, color: '#4C9EEB', marginLeft: 5}}>
              Create a group
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewMessage;
