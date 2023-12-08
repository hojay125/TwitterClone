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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const List = props => {
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
          <SearchIcon />
        </View>
        <Pressable
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={22}
            color={'black'}
          />
        </Pressable>
      </View>
      <ScrollView>
        <View style={{paddingHorizontal: '4%'}}>
          <Text
            style={{
              fontSize: 17,
              color: '#000000',
              fontWeight: '700',
            }}>
            Pinned lists
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#687684',
              fontWeight: '700',
              alignSelf: 'center',
              textAlign: 'center',
              marginTop: '10%',
            }}>
            Nothing to see here yet -- pin your favorite List to access them
            quickly.
          </Text>
        </View>
      </ScrollView>
      <Pressable
        onPress={() => props.navigation.navigate('NewMessage')}
        style={{
          height: 55,
          width: 55,
          backgroundColor: '#4C9EEB',
          borderRadius: 50,
          marginBottom: '10%',
          marginLeft: '83%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons
          name="text-box-plus-outline"
          size={25}
          color={'#FFFFFF'}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default List;
