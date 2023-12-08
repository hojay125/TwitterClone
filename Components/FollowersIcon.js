import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppIcons} from '../Helper/Images';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {RW} from '../Helper/constants';

export const FollowersIcon = props => {
  const [Splash, setSplash] = useState(true);

  return (
    <View
      style={{
        paddingHorizontal: RW(4),
        paddingVertical: 10,
        flexDirection: 'row',
      }}>
      <View style={{width: '12%'}}>
        <Image
          source={props.dp}
          style={{height: 35, width: 35, borderRadius: 50}}
        />
      </View>
      <View style={{width: '88%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '60%'}}>
            <Text
              style={{
                fontSize: 13,
                color: 'black',
                fontWeight: '500',
              }}>
              {props.name}
            </Text>
            <View style={{flexDirection: 'row', width: '80%'}}>
              <Text
                style={{
                  fontSize: 13,
                  color: '#687684',
                  fontWeight: '400',
                }}>
                @{props.handle}
              </Text>
              {props.followYou ? (
                <View
                  style={{
                    paddingHorizontal: 10,
                    borderWidth: 0.5,
                    borderRadius: 20,
                    justifyContent: 'center',
                    borderColor: '#E7ECF0',
                    backgroundColor: '#E7ECF0',
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#687684',
                      fontWeight: '500',
                    }}>
                    Follows you
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
          {props.following ? (
            <Pressable
              style={{
                paddingHorizontal: 25,
                borderWidth: 0.5,
                borderRadius: 20,
                justifyContent: 'center',
                borderColor: '#687684',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: '500',
                }}>
                Following
              </Text>
            </Pressable>
          ) : null}
          {props.followBack ? (
            <Pressable
              style={{
                paddingHorizontal: 15,
                borderWidth: 0.5,
                borderRadius: 20,
                justifyContent: 'center',
                borderColor: '#687684',
                backgroundColor: 'black',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'white',
                  fontWeight: '500',
                }}>
                Follow back
              </Text>
            </Pressable>
          ) : null}
          {props.follow ? (
            <Pressable
              style={{
                paddingHorizontal: 30,
                borderWidth: 0.5,
                borderRadius: 20,
                justifyContent: 'center',
                borderColor: '#687684',
                backgroundColor: 'black',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'white',
                  fontWeight: '500',
                }}>
                Follow
              </Text>
            </Pressable>
          ) : null}
        </View>
        <View style={{width: '95%'}}>
          <Text
            style={{
              fontSize: 13,
              color: 'black',
              fontWeight: '500',
              marginTop: 5,
            }}>
            {props.bio}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FollowersIcon;
