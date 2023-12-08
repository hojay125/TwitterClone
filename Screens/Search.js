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
import SearchIcon from '../Components/SearchIcon';

export const Search = props => {
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
          <SearchIcon />
        </View>
        <Pressable
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Feather name="settings" size={20} color={'black'} />
        </Pressable>
      </View>
      <ScrollView>
        <View
          style={{
            width: '100%',
            paddingHorizontal: '3%',
            paddingVertical: 5,
          }}>
          <Text style={{fontSize: 19, color: 'black', fontWeight: 'bold'}}>
            Trends for you
          </Text>
        </View>

        <View
          style={{
            width: '100%',
            paddingHorizontal: '5%',
            paddingVertical: '7%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
            No new trends for you
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#687684',
              textAlign: 'center',
              marginTop: 10,
            }}>
            It seems like there’s not a lot to show you right now, but you can
            see trends for other areas
          </Text>
          <Pressable
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 15,
              marginTop: '3%',
            }}>
            <Text style={{color: 'white', fontSize: 12}}>Change location</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
