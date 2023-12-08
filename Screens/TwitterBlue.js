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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const TwitterBlue = props => {
  const [Splash, setSplash] = useState(true);
  const [active, setActive] = useState('Annually');

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
            flexDirection: 'row',
          }}>
          <FontAwesome name="twitter-square" size={30} color={'black'} />
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              fontWeight: '700',
              marginLeft: 3,
            }}>
            lue
          </Text>
        </View>
        <View
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}></View>
      </View>
      <ScrollView>
        <View style={{paddingHorizontal: '4%'}}>
          <View
            style={{
              paddingHorizontal: 15,
              paddingVertical: 15,
              flexDirection: 'row',
              backgroundColor: '#E7ECF0',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <View style={{width: '72%'}}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '700',
                  marginLeft: 3,
                }}>
                Premium subscription with a verified phone number will get a
                blue checkmark once approved.
              </Text>
            </View>
            <View style={{marginLeft: 10, justifyContent: 'center'}}>
              <Image
                source={AppIcons.check}
                style={{width: 55, height: 55, borderRadius: 50}}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#E7ECF0',
                width: '80%',
                borderRadius: 25,
                flexDirection: 'row',
              }}>
              {active == 'Annually' ? (
                <Pressable
                  style={{
                    backgroundColor: '#ffffff',
                    width: '50%',
                    paddingVertical: 5,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: 'black',
                      fontWeight: '700',
                    }}>
                    Annually
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => setActive('Annually')}
                  style={{
                    width: '50%',
                    paddingVertical: 5,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: 'black',
                      fontWeight: '700',
                    }}>
                    Annually
                  </Text>
                </Pressable>
              )}
              {active == 'Monthly' ? (
                <Pressable
                  style={{
                    backgroundColor: '#ffffff',
                    width: '50%',
                    paddingVertical: 5,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: 'black',
                      fontWeight: '700',
                    }}>
                    Monthly
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => setActive('Monthly')}
                  style={{
                    width: '50%',
                    paddingVertical: 5,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: 'black',
                      fontWeight: '700',
                    }}>
                    Monthly
                  </Text>
                </Pressable>
              )}
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              paddingVertical: 15,
              backgroundColor: '#E7ECF0',
              borderRadius: 10,
              marginTop: 20,
              borderWidth: 1.5,
              borderColor: '#4C9EEB',
            }}>
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontWeight: '700',
                marginLeft: 3,
              }}>
              Premium
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#687684',
                marginLeft: 3,
                fontWeight: '700',
                marginTop: 5,
              }}>
              ▪️ Prioritized rankings in conversations and search
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#687684',
                marginLeft: 3,
                fontWeight: '700',
                marginTop: 5,
              }}>
              ▪️ See approximately twice as many posts between ads in your For
              You and Following timelines.
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#687684',
                marginLeft: 3,
                fontWeight: '700',
                marginTop: 5,
              }}>
              ▪️ Add bold and italic text in your posts
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#687684',
                marginLeft: 3,
                fontWeight: '700',
                marginTop: 5,
              }}>
              ▪️ Post longer videos and 1080 p video uploads
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#687684',
                marginLeft: 3,
                fontWeight: '700',
                marginTop: 5,
              }}>
              ▪️ All the existing Premium features, including edit post,
              Bookmark Folders and early access to new features{' '}
              <Text
                style={{
                  fontSize: 14,
                  color: '#687684',
                  marginLeft: 3,
                  fontWeight: '700',
                  marginTop: 5,
                  textDecorationLine: 'underline',
                }}>
                Learn more
              </Text>
            </Text>
          </View>
          <View>
            {active == 'Monthly' ? (
              <View
                style={{
                  backgroundColor: 'black',
                  borderRadius: 25,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  marginTop: '20%',
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    color: '#ffffff',
                    fontWeight: '700',
                    marginLeft: 3,
                    alignSelf: 'center',
                  }}>
                  $7.00 / month
                </Text>
              </View>
            ) : (
              <View
                style={{
                  backgroundColor: 'black',
                  borderRadius: 25,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  marginTop: '20%',
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    color: '#ffffff',
                    fontWeight: '700',
                    marginLeft: 3,
                    alignSelf: 'center',
                  }}>
                  $80.00 / year
                </Text>
              </View>
            )}
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                fontWeight: '500',
                marginLeft: 3,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              By subscribing, you agree to our Purchaser Terms of Service.
              Subscriptions auto-renew until canceled, as described in the
              Terms. Cancel anytime. A verified phone number is required to
              subscribe. If you've subscribed on another platform, manage your
              subscription through that platform.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TwitterBlue;
