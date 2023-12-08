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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MessageIcon from '../Components/MessageIcon';

export const SomeoneTweet = props => {
  const [Splash, setSplash] = useState(true);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: '4%',
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
            Tweet
          </Text>
        </View>
        <Pressable
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}></Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: '4%'}}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{}}>
              <Image
                source={AppIcons.pic10}
                style={{height: 40, width: 40, borderRadius: 50}}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 14, color: '#141619'}}>
                B.U.S.A.Y.O.M.I👅💦🍑
              </Text>
              <Text style={{color: '#687684'}}>@BusayoOtebata</Text>
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={{fontSize: 14, color: '#141619'}}>
              Can we have a pool thread?? {'\n'} {'\n'}Air me and i will
              deactivate
            </Text>
          </View>
          <Image
            source={AppIcons.otes}
            style={{
              height: 450,
              width: '100%',
              marginTop: 20,
              borderRadius: 10,
            }}
          />
          <View style={{marginTop: 20}}>
            <Text style={{color: '#687684'}}>
              12:39. 19/05/2023 from Earth .{' '}
              <Text style={{color: '#141619'}}>2.9M</Text>Views
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              borderTopWidth: 0.5,
              paddingVertical: 10,
              borderColor: '#BDC5CD',
            }}>
            <Text style={{color: '#141619', fontWeight: '500'}}>
              376 <Text style={{color: '#687684'}}>Retweets</Text> 865
              <Text style={{color: '#687684'}}> Quotes</Text>
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 0.5,
              paddingVertical: 10,
              borderColor: '#BDC5CD',
            }}>
            <Text style={{color: '#141619', fontWeight: '500'}}>
              2,476 <Text style={{color: '#687684'}}>Likes</Text> 135
              <Text style={{color: '#687684'}}> Bookmarks</Text>
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderTopWidth: 0.5,
              paddingVertical: 10,
              borderColor: '#BDC5CD',
              paddingHorizontal: 20,
            }}>
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Fontisto name="comment" size={17} color={'#687684'} />
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo name="retweet" size={20} color={'#687684'} />
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Octicons name="heart" size={20} color={'#687684'} />
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather name="bookmark" size={18} color={'#687684'} />
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
          <View style={{borderTopWidth: 0.5, borderColor: '#BDC5CD'}}></View>
          <MessageIcon
            dp={AppIcons.pic3}
            name={'Merit j🇨🇦💸'}
            handle={'m_onorhime'}
            time={'19/05/2023'}
            text={'Dat my pic but no yansh 🥹'}
            comment={true}
          />
          <MessageIcon
            dp={AppIcons.pic10}
            name={'B.U.S.A.Y.O.M.I👅💦🍑'}
            handle={'.'}
            time={'19/05/2023'}
            text={'Post it still'}
            comment={true}
          />
          <View style={{borderTopWidth: 0.5, borderColor: '#BDC5CD'}}></View>
          <MessageIcon
            dp={AppIcons.pic3}
            name={'Fine boi CEO'}
            handle={'AbdulsemiuD'}
            time={'19/05/2023'}
            text={'🙌'}
            Image={true}
            imageUpload={AppIcons.swim1}
            comment={true}
          />
          <MessageIcon
            dp={AppIcons.pic10}
            name={'B.U.S.A.Y.O.M.I👅💦🍑'}
            handle={'.'}
            time={'19/05/2023'}
            text={'Cap inside water !!??😂😂😂'}
            comment={true}
          />
        </View>
      </ScrollView>
      <View
        style={{
          height: '8%',
          borderTopWidth: 0.5,
          borderColor: '#BDC5CD',
          paddingHorizontal: '4%',
        }}>
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <View style={{width: '13%'}}>
            <Image
              source={AppIcons.pic10}
              style={{height: 40, width: 40, borderRadius: 50}}
            />
          </View>

          <View style={{width: '87%'}}>
            <SearchIcon placeholder={'Tweet your reply'} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SomeoneTweet;
