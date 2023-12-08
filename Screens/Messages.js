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
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {AppIcons} from '../Helper/Images';
import Feather from 'react-native-vector-icons/Feather';
import SearchIcon from '../Components/SearchIcon';
import MessageIcon from '../Components/MessageIcon';

export const Messages = props => {
  const navigation = useNavigation();
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
            Messages
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('MessageSettings')}
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Feather name="settings" size={20} color={'black'} />
        </Pressable>
      </View>
      <View
        style={{
          paddingHorizontal: '3%',
          paddingBottom: 10,
          borderBottomWidth: 0.5,
          borderColor: '#BDC5CD',
        }}>
        <SearchIcon placeholder={'search direct Messages'} />
      </View>
      <ScrollView style={{paddingHorizontal: '3%'}}>
        <MessageIcon
          dp={AppIcons.pic14}
          name={'Oyindamola'}
          handle={'dammiedammie'}
          time={'02/08/2023'}
          text={'You: Yeah i will be available for a call'}
        />
        <MessageIcon
          dp={AppIcons.pic16}
          name={'STARBOY GUCCI'}
          handle={'Guccistarboi'}
          time={'06/08/2023'}
          text={'You: I don dey expect your text bro'}
        />
        <MessageIcon
          dp={AppIcons.otesspp}
          name={'B.U.S.A.Y.O.M.I👅💦🍑'}
          handle={'BusayoOtebata'}
          time={'06/08/2023'}
          text={'You: omo no bne send am oooo lol 😂'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Messages;
