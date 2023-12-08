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

export const TweetScreen = props => {
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
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => props.navigation.goBack()}
          style={{
            width: '30%',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 17, color: 'black'}}>Cancel</Text>
        </Pressable>
        <View
          style={{
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
          }}></View>
        <Pressable
          style={{
            width: '30%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              height: 34,
              width: 67,
              backgroundColor: '#B9DCF7',
              borderRadius: 17,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: '#ffffff'}}>Tweet</Text>
          </View>
        </Pressable>
      </View>
      <ScrollView>
        <View style={{paddingHorizontal: '4%', flexDirection: 'row'}}>
          <View style={{width: '10%'}}>
            <Image
              source={AppIcons.pp}
              style={{height: 35, width: 35, borderRadius: 50}}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View
              style={{
                paddingVertical: 1,
                borderWidth: 1,
                borderColor: '#4C9EEB',
                borderRadius: 25,
                flexDirection: 'row',
                width: 80,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 14, color: '#4C9EEB', marginRight: 2}}>
                Publ..
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={20}
                color={'#4C9EEB'}
              />
            </View>
            <View>
              <TextInput
                style={{fontSize: 17}}
                multiline={true}
                placeholder="What's happening?"
                placeholderTextColor={'#687684'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TweetScreen;
