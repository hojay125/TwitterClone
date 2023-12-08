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

export const Like = props => {
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
        <Octicons name="heart-fill" size={25} color={'#CE395F'} />
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
          }}>
          <Image
            source={props.dp1}
            style={{height: 30, width: 30, borderRadius: 50}}
          />
          <Image
            source={props.dp2}
            style={{height: 30, width: 30, borderRadius: 50, marginLeft: 5}}
          />
          <Image
            source={props.dp3}
            style={{height: 30, width: 30, borderRadius: 50, marginLeft: 5}}
          />
          <Image
            source={props.dp4}
            style={{height: 30, width: 30, borderRadius: 50, marginLeft: 5}}
          />
          <Image
            source={props.dp5}
            style={{height: 30, width: 30, borderRadius: 50, marginLeft: 5}}
          />
          <Image
            source={props.dp6}
            style={{height: 30, width: 30, borderRadius: 50, marginLeft: 5}}
          />
          <Image
            source={props.dp7}
            style={{height: 30, width: 30, borderRadius: 50, marginLeft: 5}}
          />
        </View>

        <View style={{}}>
          <Text style={{fontSize: 15, color: '#141619', fontWeight: '500'}}>
            {props.whoLikes} liked your reply
          </Text>
        </View>
        <View style={{marginTop: 5}}>
          <Text style={{fontSize: 15, color: '#687684'}}>{props.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default Like;
