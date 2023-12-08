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

export const Communities = props => {
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
          style={{
            width: '15%',
            justifyContent: 'center',
          }}>
          <Image
            source={AppIcons.pp}
            style={{height: 38, width: 38, borderRadius: 50}}
          />
        </Pressable>
        <View
          style={{
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
            Communities
          </Text>
        </View>
        <Pressable
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <MaterialCommunityIcons
            name="account-multiple-plus-outline"
            size={22}
            color={'black'}
          />
        </Pressable>
      </View>
      <ScrollView>
        <View style={{paddingHorizontal: '4%'}}>
          <Image source={AppIcons.person} style={{alignSelf: 'center'}} />
          <Text style={{fontSize: 32, marginTop: 20, color: 'black'}}>
            it's quite around here -- for now
          </Text>
          <Text style={{fontSize: 16, marginTop: 10, color: '#687684'}}>
            looks like your communites does not have any Tweets yet. when they
            do, you will see them here.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Communities;
