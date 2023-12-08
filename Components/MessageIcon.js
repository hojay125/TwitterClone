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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const MessageIcon = props => {
  const [Splash, setSplash] = useState(true);

  return (
    <View
      style={{
        paddingVertical: 8,
        flexDirection: 'row',
      }}>
      <Image
        source={props.dp}
        style={{height: 40, width: 40, borderRadius: 50}}
      />
      <View
        style={{
          width: '85%',
          paddingLeft: '4%',
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
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#141619'}}>
              {props.name}
            </Text>
            <Text style={{color: '#687684'}}> @{props.handle}</Text>
            <Text style={{color: '#687684'}}> .{props.time}</Text>
          </View>
        </View>

        <View style={{}}>
          <Text style={{fontSize: 15, color: '#687684'}}>{props.text}</Text>
        </View>
        {props.Image ? (
          <Image
            source={props.imageUpload}
            style={{height: 250, width: '100%', marginTop: 5, borderRadius: 10}}
          />
        ) : null}

        {props.comment ? (
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
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo name="retweet" size={20} color={'#687684'} />
              <Text style={{color: '#687684', marginLeft: 2, fontSize: 12}}>
                {props.retweets}
              </Text>
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Octicons name="heart" size={20} color={'#687684'} />
              <Text style={{color: '#687684', marginLeft: 2, fontSize: 12}}>
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
        ) : null}
      </View>
    </View>
  );
};

export default MessageIcon;
