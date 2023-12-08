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
  Pressable,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppIcons} from '../Helper/Images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {RW} from '../Helper/constants';

export const Tweets = props => {
  const [Splash, setSplash] = useState(true);
  const [like, setLike] = useState(null);

  return (
    <View>
      {props.pinned ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: RW(10),
            paddingTop: 10,
          }}>
          <MaterialCommunityIcons name="pin" size={15} color={'#687684'} />
          <Text
            style={{
              fontSize: 13,
              fontWeight: '500',
              color: '#687684',
              marginLeft: 5,
            }}>
            Pinned Tweet
          </Text>
        </View>
      ) : null}
      {props.retweet ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: RW(10),
            paddingTop: 10,
            borderTopWidth: 0.5,
            borderColor: '#CED5DC',
          }}>
          <Entypo name="retweet" size={14} color={'#687684'} />
          <Text
            style={{
              fontSize: 13,
              fontWeight: '500',
              color: '#687684',
              marginLeft: 5,
            }}>
            You Retweet
          </Text>
        </View>
      ) : null}

      <Pressable
        onPress={props.onPress}
        style={{
          paddingHorizontal: '3%',
          paddingVertical: '2%',
          borderTopWidth:
            props.pinned || props.retweet || props.reply ? null : 0.5,
          borderColor: '#CED5DC',
          flexDirection: 'row',
        }}>
        <Pressable style={{paddingRight: 5, alignItems: 'center'}}>
          <Image
            source={props.dp}
            style={{height: 40, width: 40, borderRadius: 50}}
          />
        </Pressable>

        <View
          style={{
            width: '88%',
          }}>
          <View
            style={{
              paddingBottom: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 15, color: '#141619'}}>
                {props.name}
              </Text>
              <Text style={{color: '#687684', fontSize: 13, fontWeight: '500'}}>
                {' '}
                @{props.handle}
              </Text>
              <Text style={{color: '#687684', fontSize: 13, fontWeight: '500'}}>
                {' '}
                .{props.time}
              </Text>
            </View>
            <View>
              <Pressable style={{}}>
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={20}
                  color={'#687684'}
                />
              </Pressable>
            </View>
          </View>
          <Pressable style={{paddingRight: '3%'}}>
            <Text style={{fontSize: 16, color: '#141619'}}>
              {props.message}
            </Text>
          </Pressable>
          {props.image ? (
            <Image
              source={props.imageUpload}
              style={{
                height: 350,
                width: '100%',
                marginTop: 5,
                borderRadius: 10,
              }}
            />
          ) : null}

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingVertical: 8,
            }}>
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Fontisto name="comment" size={17} color={'#687684'} />
              <Text style={{color: '#687684', marginLeft: 2, fontSize: 12}}>
                {props.comments}
              </Text>
            </Pressable>
            <Pressable
              onPress={props.onPressRetweet}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo
                name="retweet"
                size={20}
                color={props.retweet ? '#59BC6C' : '#687684'}
              />
              <Text
                style={{
                  color: props.retweet ? '#59BC6C' : '#687684',
                  marginLeft: 2,
                  fontSize: 12,
                }}>
                {props.retweets}
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setLike(!like)}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {like == true ? (
                <Octicons name="heart-fill" size={20} color={'#CE395F'} />
              ) : (
                <Octicons name="heart" size={20} color={'#687684'} />
              )}

              <Text
                style={{
                  color: like == true ? '#CE395F' : '#687684',
                  marginLeft: 2,
                  fontSize: 12,
                }}>
                {props.likes}
              </Text>
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons name="stats-chart-sharp" size={18} color={'#687684'} />
              <Text style={{color: '#687684', marginLeft: 3, fontSize: 12}}>
                {props.impression}
              </Text>
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather name="upload" size={18} color={'#687684'} />
            </Pressable>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Tweets;
