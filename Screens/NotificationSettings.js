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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchIcon from '../Components/SearchIcon';
export const NotificationSettings = props => {
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
            Notifications
          </Text>
          <Text style={{fontSize: 12, color: '#687684'}}>@onii_of_lagos</Text>
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
          <Text style={{fontSize: 13, color: '#687684'}}>
            Select the kind of notification you get about yoyr activities,
            interests, and recommendationts.
          </Text>

          <View
            style={{
              paddingVertical: 5,
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '80%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome name="sliders" size={18} color={'#687684'} />
              <View style={{paddingLeft: 15}}>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    fontWeight: '700',
                  }}>
                  Filters
                </Text>
                <Text style={{fontSize: 13, color: '#687684'}}>
                  Choose the notifications you would like to see - and those you
                  don't.
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '20%',
                alignItems: 'flex-end',
              }}>
              <Ionicons
                name="chevron-forward-sharp"
                size={20}
                color={'#687684'}
              />
            </View>
          </View>

          <View
            style={{
              paddingVertical: 5,
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '80%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcons
                name="phonelink-ring"
                size={22}
                color={'#687684'}
              />
              <View style={{paddingLeft: 15}}>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    fontWeight: '700',
                  }}>
                  Prefrences
                </Text>
                <Text style={{fontSize: 13, color: '#687684'}}>
                  Select your prefrence by notification types.
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '20%',
                alignItems: 'flex-end',
              }}>
              <Ionicons
                name="chevron-forward-sharp"
                size={20}
                color={'#687684'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationSettings;
