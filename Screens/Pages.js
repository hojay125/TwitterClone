import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, View, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppIcons} from '../Helper/Images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './Home';
import Search from './Search';
import Communities from './Communities';
import Notification from './Notification';
import Messages from './Messages';

export const Pages = props => {
  const [Active, setActive] = useState('Home');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={{height: '90%', width: '100%'}}>
        {Active == 'Home' ? <Home /> : null}
        {Active == 'Search' ? <Search /> : null}
        {Active == 'Communities' ? <Communities /> : null}
        {Active == 'Notification' ? <Notification /> : null}
        {Active == 'Messages' ? <Messages /> : null}
      </View>
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          width: '100%',
          backgroundColor: '#E7ECF0aa',
          height: '10%',
          flexDirection: 'row',
        }}>
        {Active == 'Home' ? (
          <Pressable
            style={{
              width: '20%',
              alignItems: 'center',
              paddingTop: '4%',
            }}>
            <MaterialCommunityIcons
              name="home-lightbulb"
              size={30}
              color={'#000000'}
            />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setActive('Home')}
            style={{
              width: '20%',
              alignItems: 'center',
              paddingTop: '4%',
            }}>
            <MaterialCommunityIcons
              name="home-lightbulb-outline"
              size={30}
              color={'#000000'}
            />
          </Pressable>
        )}
        {Active == 'Search' ? (
          <Pressable
            style={{
              width: '20%',
              alignItems: 'center',
              paddingTop: '4%',
            }}>
            <Ionicons name="search" size={30} color={'#000000'} />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setActive('Search')}
            style={{
              width: '20%',
              alignItems: 'center',
              paddingTop: '4%',
            }}>
            <Ionicons name="search-outline" size={30} color={'#000000'} />
          </Pressable>
        )}
        {Active == 'Communities' ? (
          <Pressable
            style={{
              width: '20%',
              alignItems: 'center',
              paddingTop: '4%',
            }}>
            <Ionicons name="people" size={30} color={'#000000'} />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setActive('Communities')}
            style={{
              width: '20%',
              alignItems: 'center',
              paddingTop: '4%',
            }}>
            <Ionicons name="people-outline" size={30} color={'#000000'} />
          </Pressable>
        )}
        {Active == 'Notification' ? (
          <Pressable
            style={{
              width: '20%',
              alignItems: 'center',
              paddingTop: '4%',
            }}>
            <Ionicons name="notifications-sharp" size={30} color={'#000000'} />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setActive('Notification')}
            style={{
              width: '20%',
              alignItems: 'center',
              paddingTop: '4%',
            }}>
            <Ionicons
              name="notifications-outline"
              size={30}
              color={'#000000'}
            />
          </Pressable>
        )}
        {Active == 'Messages' ? (
          <Pressable
            style={{
              width: '20%',
              alignItems: 'center',
              paddingTop: '4%',
            }}>
            <Ionicons name="mail" size={30} color={'#000000'} />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setActive('Messages')}
            style={{
              width: '20%',
              alignItems: 'center',
              paddingTop: '4%',
            }}>
            <Ionicons name="mail-outline" size={30} color={'#000000'} />
          </Pressable>
        )}
      </KeyboardAvoidingView>
      {Active == 'Messages' ? (
        <Pressable
          onPress={() => props.navigation.navigate('NewMessage')}
          style={{
            height: 55,
            width: 55,
            backgroundColor: '#4C9EEB',
            borderRadius: 50,
            marginTop: -150,
            marginLeft: '83%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons
            name="email-plus-outline"
            size={25}
            color={'#FFFFFF'}
          />
        </Pressable>
      ) : (
        <Pressable
          onPress={() => props.navigation.navigate('TweetScreen')}
          style={{
            height: 55,
            width: 55,
            backgroundColor: '#4C9EEB',
            borderRadius: 50,
            marginTop: -150,
            marginLeft: '83%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="plus" size={25} color={'#FFFFFF'} />
        </Pressable>
      )}
    </View>
  );
};

export default Pages;
