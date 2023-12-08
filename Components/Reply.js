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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export const Reply = props => {
  const [Splash, setSplash] = useState(true);

  return (
    <View
      style={{
        paddingVertical: 10,
        borderTopWidth: 0.5,
        borderColor: '#BDC5CD',
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: '15%',
          paddingRight: 10,
          alignItems: 'flex-end',
        }}>
        <Image
          source={props.dp}
          style={{height: 38, width: 38, borderRadius: 50}}
        />
      </View>
      <View
        style={{
          width: '85%',
          paddingRight: '4%',
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
              width: '80%',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#141619'}}>
              {props.name}
            </Text>
            <Text style={{color: '#687684'}}> @{props.handle}</Text>
            <Text style={{color: '#687684'}}> .{props.time}</Text>
          </View>

          <Pressable style={{}}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={20}
              color={'#687684'}
            />
          </Pressable>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 15, color: '#687684'}}>Replying to </Text>
          <Text style={{fontSize: 15, color: '#4C9EEB'}}>{props.replyTo}</Text>
        </View>
        <View style={{marginTop: 5}}>
          <Text style={{fontSize: 15, color: '#141619'}}>{props.text}</Text>
        </View>

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
      </View>
    </View>
  );
};

export default Reply;
