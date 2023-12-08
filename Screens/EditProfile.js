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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchIcon from '../Components/SearchIcon';
import {RH, RW} from '../Helper/constants';
export const EditProfile = props => {
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
          <Text style={{fontSize: 18, color: 'black', fontWeight: '400'}}>
            Cancel
          </Text>
        </Pressable>
        <View
          style={{
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
            Communities
          </Text>
        </View>
        <Pressable
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Text style={{fontSize: 18, color: '#687684', fontWeight: '600'}}>
            Save
          </Text>
        </Pressable>
      </View>
      <ScrollView>
        <View style={{paddingHorizontal: '2%'}}>
          <Image
            source={AppIcons.image4}
            style={{alignSelf: 'center', height: RH(15)}}
          />
          <View style={{}}>
            <Image
              source={AppIcons.pp}
              style={{
                height: 70,
                width: 70,
                borderRadius: 50,
                borderColor: '#FFFFFF',
                borderWidth: 3,
                marginTop: -RH(3),
              }}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.2,
            borderTopWidth: 0.2,
            borderColor: '#687684',
            marginTop: RH(3),
            paddingHorizontal: '3%',
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <View style={{width: RW(18)}}>
            <Text style={{color: '#000000', fontWeight: '600'}}>Name</Text>
          </View>

          <View style={{width: RW(75)}}>
            <TextInput
              style={{color: '#4C9EEB', fontWeight: '600'}}
              multiline={true}
              maxLength={30}
              placeholder="Add your name"
            />
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 0.2,
            borderColor: '#687684',
            paddingHorizontal: '3%',
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <View style={{width: RW(18), height: 60}}>
            <Text style={{color: '#000000', fontWeight: '600'}}>Bio</Text>
          </View>

          <View style={{width: RW(75), height: 60}}>
            <TextInput
              style={{color: '#4C9EEB', fontWeight: '600'}}
              multiline={true}
              maxLength={150}
              placeholder="Add a bio to your profile"
            />
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.2,
            borderColor: '#687684',
            paddingHorizontal: '3%',
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <View style={{width: RW(18)}}>
            <Text style={{color: '#000000', fontWeight: '600'}}>Location</Text>
          </View>

          <View style={{width: RW(75)}}>
            <TextInput
              style={{color: '#4C9EEB', fontWeight: '600'}}
              multiline={true}
              maxLength={150}
              placeholder="Add your location"
            />
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.2,
            borderColor: '#687684',
            paddingHorizontal: '3%',
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <View style={{width: RW(18)}}>
            <Text style={{color: '#000000', fontWeight: '600'}}>Website</Text>
          </View>

          <View style={{width: RW(75)}}>
            <TextInput
              style={{color: '#4C9EEB', fontWeight: '600'}}
              multiline={true}
              maxLength={150}
              placeholder="Add your website"
            />
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.2,
            borderColor: '#687684',
            paddingHorizontal: '3%',
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <View style={{width: RW(18)}}>
            <Text style={{color: '#000000', fontWeight: '600'}}>
              Birth date
            </Text>
          </View>

          <View style={{width: RW(75)}}>
            <TextInput
              style={{color: '#4C9EEB', fontWeight: '600'}}
              multiline={true}
              maxLength={150}
              placeholder="Add your birth date"
              keyboardType="numbers-and-punctuation"
            />
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.2,
            borderColor: '#687684',
            paddingHorizontal: '3%',
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <View style={{}}>
            <Text style={{color: '#000000', fontWeight: '600'}}>
              Switch to Professional
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.2,
            borderColor: '#687684',
            paddingHorizontal: '3%',
            alignItems: 'center',
            flexDirection: 'row',
            height: 40,
          }}></View>
        <View
          style={{
            borderBottomWidth: 0.2,
            borderColor: '#687684',
            paddingHorizontal: '3%',
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <View style={{width: RW(18)}}>
            <Text style={{color: '#000000', fontWeight: '600'}}>Tips</Text>
          </View>

          <View style={{width: RW(75), alignItems: 'flex-end'}}>
            <Text style={{color: '#687684', fontWeight: '600'}}>off</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
