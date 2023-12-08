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
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchIcon from '../Components/SearchIcon';

export const MessageSettings = props => {
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
          <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
            Message settings
          </Text>
        </View>
        <Pressable
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
            Done
          </Text>
        </Pressable>
      </View>
      <ScrollView>
        <View style={{paddingHorizontal: '3%'}}>
          <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
            Control who can message you
          </Text>
          <Text style={{fontSize: 13, color: '#687684', marginTop: 5}}>
            Depending on the settings you select, different poeple can send you
            a direct message.<Text style={{color: '#4C9EEB'}}> learn more</Text>
          </Text>
          <View
            style={{
              paddingVertical: 5,
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <View style={{width: '88%'}}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: '700'}}>
                Allow messages only from people you follow
              </Text>
            </View>
            <View
              style={{
                width: '12%',
                alignItems: 'flex-end',
              }}>
              <AntDesign name="checkcircle" size={20} color={'#4C9EEB'} />
            </View>
          </View>
          <Text style={{fontSize: 13, color: '#687684'}}>
            No message request will be allowed
          </Text>
          <View
            style={{
              paddingVertical: 5,
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <View style={{width: '88%'}}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: '700'}}>
                Allow messages request from verified users only
              </Text>
            </View>
            <View
              style={{
                width: '12%',
                alignItems: 'flex-end',
              }}>
              <AntDesign name="checkcircle" size={20} color={'#4C9EEB'} />
            </View>
          </View>
          <Text style={{fontSize: 13, color: '#687684'}}>
            peopole you follow will still be able to message you
          </Text>
          <View
            style={{
              paddingVertical: 5,
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <View style={{width: '88%'}}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: '700'}}>
                Allow messages request from everyone
              </Text>
            </View>
            <View
              style={{
                width: '12%',
                alignItems: 'flex-end',
              }}>
              <AntDesign name="checkcircle" size={20} color={'#4C9EEB'} />
            </View>
          </View>
          <Text style={{fontSize: 13, color: '#687684'}}>
            peopole you follow will still be able to message you
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: 'black',
              fontWeight: '700',
              marginTop: 20,
            }}>
            Other controls
          </Text>
          <View
            style={{
              paddingVertical: 5,
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <View style={{width: '88%'}}>
              <Text style={{fontSize: 14, color: '#687684', fontWeight: '700'}}>
                Filter low-quality messages
              </Text>
            </View>
            <View
              style={{
                width: '12%',
                alignItems: 'flex-end',
              }}>
              <AntDesign name="checkcircle" size={20} color={'#4C9EEB'} />
            </View>
          </View>
          <Text style={{fontSize: 13, color: '#687684', marginTop: 5}}>
            Hide message request that have been dectected as being potentially
            spam or low-quality. These will be sent to a seperate inbox located
            at the bottom of your message request. You can still access them if
            you want. <Text style={{color: '#4C9EEB'}}> Learn more</Text>
          </Text>
          <View
            style={{
              paddingVertical: 5,
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <View style={{width: '88%'}}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: '700'}}>
                Show read reciepts
              </Text>
            </View>
            <View
              style={{
                width: '12%',
                alignItems: 'flex-end',
              }}>
              <AntDesign name="checkcircle" size={20} color={'#4C9EEB'} />
            </View>
          </View>
          <Text style={{fontSize: 13, color: '#687684'}}>
            Let people you&apos;re messaging with know when you&apos;ve seen
            their messages.
          </Text>
          <Text style={{fontSize: 13, color: '#687684', marginTop: 10}}>
            Read reciepts are not show on message request{' '}
            <Text style={{color: '#4C9EEB'}}> Learn more</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessageSettings;
