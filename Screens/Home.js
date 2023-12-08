import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {AppIcons} from '../Helper/Images';
import CheckBox from '@react-native-community/checkbox';
import Tweets from '../Components/tweets';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {RH, RW} from '../Helper/constants';

export const Home = props => {
  const navigation = useNavigation();
  const [support, setSupport] = useState(false);
  const [check, setCheck] = useState(false);
  const [tools, setTools] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const blueScreen = () => {
    setModal(false);
    navigation.navigate('TwitterBlue');
  };
  const list = () => {
    setModal(false);
    navigation.navigate('List');
  };
  const spaces = () => {
    setModal(false);
    navigation.navigate('Spaces');
  };
  const profile = () => {
    setModal(false);
    navigation.navigate('Profile');
  };
  const follow = () => {
    setModal(false);
    navigation.navigate('FollowScreen');
  };

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
          onPress={() => setModal(true)}
          style={{
            width: '33%',
            justifyContent: 'center',
          }}>
          <Image
            source={AppIcons.pp}
            style={{height: 38, width: 38, borderRadius: 50}}
          />
        </Pressable>
        <View
          style={{
            width: '33%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={AppIcons.Xwhite} style={{height: 30, width: 30}} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Tweets
            onPress={() => navigation.navigate('SomeoneTweet')}
            onPressRetweet={() => setModal2(true)}
            dp={AppIcons.otesspp}
            name={'B.U.S.A.Y.O.M.I👅💦🍑'}
            handle={'Busayo..'}
            time={'10hr'}
            message={
              'Can we have a pool thread?? \n \nAir me and i will deactivate'
            }
            image={true}
            imageUpload={AppIcons.otes}
            comments={'924'}
            retweets={'1,241'}
            likes={'2,471'}
            impression={'2.9M'}
          />

          <Tweets
            onPressRetweet={() => setModal2(true)}
            dp={AppIcons.pic2}
            name={'Reuben Abati'}
            handle={'abati1990'}
            time={'45min'}
            message={
              'UXR/UX: You can only bring one item to a remote island to assist your research \n \nof native use of tools and usability. What do you bring? #TellMeAboutYou'
            }
            comments={'13'}
            retweets={'32'}
            likes={'435'}
            impression={'987'}
          />
          <Tweets
            onPressRetweet={() => setModal2(true)}
            dp={AppIcons.pic3}
            name={'Dami Foreign🥶'}
            handle={'dami4reign'}
            time={'3h'}
            message={'Sapa no be anybody mate oooo 😤'}
            image={true}
            imageUpload={AppIcons.image2}
            comments={'43'}
            retweets={'102'}
            likes={'1026'}
            impression={'5632'}
          />
          <Tweets
            onPressRetweet={() => setModal2(true)}
            dp={AppIcons.pic7}
            name={'Dr Penking🇳🇬🇳🇿'}
            handle={'drpenking'}
            time={'2h'}
            message={'#Justiceformohbad'}
            image={true}
            imageUpload={AppIcons.image4}
            comments={'24'}
            retweets={'564'}
            likes={'2654'}
            impression={'10362'}
          />
          <Tweets
            dp={AppIcons.pp}
            name={'oni-of-lagos🫶🖤'}
            handle={'onii_of.'}
            time={'11h'}
            message={
              'Have been working on this twitter clone App \nGod i need an expert to teach me API consumption🙏'
            }
            comments={''}
            retweets={'2'}
            likes={'11'}
            impression={'97'}
          />
          <Tweets
            dp={AppIcons.pic8}
            name={'Bodelife 🔱'}
            handle={'bodelife23'}
            time={'21h'}
            message={
              'Lets have your face card thread \nPlease dont air me \n#Justiceformohbad'
            }
            image={true}
            imageUpload={AppIcons.image}
            comments={'9'}
            retweets={'17'}
            likes={'62'}
            impression={'138'}
          />
        </View>
      </ScrollView>

      <Modal
        isVisible={modal}
        onBackButtonPress={() => setModal(false)}
        onBackdropPress={() => setModal(false)}
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        backdropColor={'#E7ECF0aa'}>
        <SafeAreaView
          style={{
            height: '100%',
            width: '90%',
            backgroundColor: '#FFFFFF',
            flex: 1,
            marginLeft: '-5%',
            marginTop: '-5%',
            marginBottom: '-5%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              paddingHorizontal: '5%',
            }}>
            <Pressable
              onPress={() => profile()}
              style={{
                width: '33%',
                justifyContent: 'center',
              }}>
              <Image
                source={AppIcons.pp}
                style={{height: 38, width: 38, borderRadius: 50}}
              />
            </Pressable>
            <View
              style={{
                width: '33%',
                justifyContent: 'center',
                alignItems: 'center',
              }}></View>
            <View
              style={{
                width: '33%',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={AppIcons.pic16}
                style={{height: 25, width: 25, borderRadius: 50}}
              />
              <View style={{marginLeft: 10}}></View>
              <Ionicons
                name="ellipsis-horizontal-circle"
                size={25}
                color={'#000000'}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: '5%',
              marginTop: 15,
            }}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>
              Oni-of_Lagos🫶🖤
            </Text>
            <Text style={{fontSize: 13, color: '#687684'}}>@onii_of_lagos</Text>

            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Pressable onPress={() => follow()}>
                <Text style={{fontSize: 13, color: '#000000'}}>
                  250{' '}
                  <Text style={{fontSize: 13, color: '#687684'}}>
                    Following
                  </Text>
                </Text>
              </Pressable>
              <Pressable onPress={() => follow()}>
                <Text style={{fontSize: 13, color: '#000000', marginLeft: 15}}>
                  163{' '}
                  <Text style={{fontSize: 13, color: '#687684'}}>
                    Followers
                  </Text>
                </Text>
              </Pressable>
            </View>
          </View>
          <ScrollView>
            <Pressable
              onPress={() => profile()}
              style={{
                flexDirection: 'row',
                paddingHorizontal: '5%',
                marginTop: 25,
              }}>
              <FontAwesome5 name="user" size={20} color={'#000000'} />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000000',
                  marginLeft: 10,
                  fontWeight: '700',
                }}>
                Profile
              </Text>
            </Pressable>
            <Pressable
              onPress={() => blueScreen()}
              style={{
                flexDirection: 'row',
                paddingHorizontal: '5%',
                marginTop: 25,
              }}>
              <FontAwesome name="twitter-square" size={20} color={'#000000'} />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000000',
                  marginLeft: 10,
                  fontWeight: '700',
                }}>
                Twitter Blue
              </Text>
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',
                paddingHorizontal: '5%',
                marginTop: 25,
              }}>
              <Feather name="bookmark" size={20} color={'#000000'} />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000000',
                  marginLeft: 10,
                  fontWeight: '700',
                }}>
                Bookmarks
              </Text>
            </Pressable>
            <Pressable
              onPress={() => list()}
              style={{
                flexDirection: 'row',
                paddingHorizontal: '5%',
                marginTop: 25,
              }}>
              <MaterialIcons name="list-alt" size={22} color={'#000000'} />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000000',
                  marginLeft: 10,
                  fontWeight: '700',
                }}>
                List
              </Text>
            </Pressable>
            <Pressable
              onPress={() => spaces()}
              style={{
                flexDirection: 'row',
                paddingHorizontal: '5%',
                marginTop: 25,
              }}>
              <FontAwesome5 name="microphone-alt" size={22} color={'#000000'} />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000000',
                  marginLeft: 10,
                  fontWeight: '700',
                }}>
                Spaces
              </Text>
            </Pressable>
            <View style={{borderBottomWidth: 0.5, marginTop: '20%'}}></View>
            <Pressable
              onPress={() => setTools(!tools)}
              style={{
                paddingVertical: 5,
                marginTop: '15%',
                flexDirection: 'row',
                paddingHorizontal: '5%',
              }}>
              <View style={{width: '88%'}}>
                <Text style={{fontSize: 14, color: 'black', fontWeight: '500'}}>
                  Professional Tools
                </Text>
              </View>
              <View
                style={{
                  width: '12%',
                  alignItems: 'flex-end',
                }}>
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={22}
                  color={'#4C9EEB'}
                />
              </View>
            </Pressable>
            {tools == true ? (
              <View style={{}}>
                <Pressable
                  style={{
                    paddingVertical: 5,
                    flexDirection: 'row',
                    paddingHorizontal: '5%',
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      width: '12%',
                      justifyContent: 'center',
                    }}>
                    <AntDesign name="rocket1" size={20} color={'#000000'} />
                  </View>
                  <View style={{width: '88%'}}>
                    <Text style={{fontSize: 14, color: 'black'}}>
                      Twitter for Professionals
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={{
                    paddingVertical: 15,
                    flexDirection: 'row',
                    paddingHorizontal: '5%',
                  }}>
                  <View
                    style={{
                      width: '12%',
                      justifyContent: 'center',
                    }}>
                    <FontAwesome name="money" size={20} color={'#000000'} />
                  </View>
                  <View style={{width: '88%'}}>
                    <Text style={{fontSize: 14, color: 'black'}}>
                      Monetization
                    </Text>
                  </View>
                </Pressable>
              </View>
            ) : null}

            <Pressable
              onPress={() => setSupport(!support)}
              style={{
                paddingVertical: 5,
                flexDirection: 'row',
                paddingHorizontal: '5%',
                marginTop: 5,
              }}>
              <View style={{width: '88%'}}>
                <Text style={{fontSize: 14, color: 'black', fontWeight: '500'}}>
                  Settings and Support
                </Text>
              </View>
              <View
                style={{
                  width: '12%',
                  alignItems: 'flex-end',
                }}>
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={22}
                  color={'#4C9EEB'}
                />
              </View>
            </Pressable>
            {support == true ? (
              <View style={{}}>
                <Pressable
                  style={{
                    paddingVertical: 5,
                    flexDirection: 'row',
                    paddingHorizontal: '5%',
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      width: '12%',
                      justifyContent: 'center',
                    }}>
                    <AntDesign name="setting" size={20} color={'#000000'} />
                  </View>
                  <View style={{width: '88%'}}>
                    <Text style={{fontSize: 14, color: 'black'}}>
                      Settings and Privacy
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={{
                    paddingVertical: 15,
                    flexDirection: 'row',
                    paddingHorizontal: '5%',
                  }}>
                  <View
                    style={{
                      width: '12%',
                      justifyContent: 'center',
                    }}>
                    <Feather name="help-circle" size={20} color={'#000000'} />
                  </View>
                  <View style={{width: '88%'}}>
                    <Text style={{fontSize: 14, color: 'black'}}>
                      Help Center
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={{
                    paddingVertical: 5,
                    flexDirection: 'row',
                    paddingHorizontal: '5%',
                    marginBottom: 40,
                  }}>
                  <View
                    style={{
                      width: '12%',
                      justifyContent: 'center',
                    }}>
                    <AntDesign
                      name="shoppingcart"
                      size={20}
                      color={'#000000'}
                    />
                  </View>
                  <View style={{width: '88%'}}>
                    <Text style={{fontSize: 14, color: 'black'}}>
                      Purchases
                    </Text>
                  </View>
                </Pressable>
              </View>
            ) : null}
            <View
              style={{
                height: '100%',
                width: '13%',
              }}>
              {/* <CheckBox
                value={check}
                onValueChange={value => setCheck(value)}
                tintColors={{true: '#28769A', false: 'black'}}
              /> */}
            </View>
          </ScrollView>
          <View
            style={{
              paddingHorizontal: '5%',
              paddingHorizontal: 10,
              paddingVertical: 1,
              height: '9%',
              justifyContent: 'center',
            }}>
            <Pressable>
              <Feather name="sun" size={28} color={'#000000'} />
            </Pressable>
          </View>
        </SafeAreaView>
      </Modal>
      <Modal
        isVisible={modal2}
        onBackButtonPress={() => setModal2(false)}
        onBackdropPress={() => setModal2(false)}
        animationIn={'slideInUp'}
        animationOut={'slideOutLeft'}
        backdropColor={'#000000aa'}>
        <View
          style={{
            height: RH(28),
            width: RW(100),
            backgroundColor: '#FFFFFF',
            marginLeft: '-5.5%',
            marginTop: RH(72),
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            paddingHorizontal: '4%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 5,
              paddingVertical: 5,
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#E7ECF0',
                width: 30,
                height: 3,
              }}></View>
          </View>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 5,
              paddingVertical: 5,
              marginTop: RH(2),
            }}>
            <Entypo name="retweet" size={25} color={'#687684'} />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 17,
                fontWeight: '500',
                color: '#141619',
              }}>
              Retweet
            </Text>
          </Pressable>
          <Pressable
            style={{
              flexDirection: 'row',

              paddingHorizontal: 5,
              paddingVertical: 5,
              marginTop: RH(2),
              alignItems: 'center',
            }}>
            <FontAwesome5 name="pen" size={25} color={'#687684'} />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 17,
                fontWeight: '500',
                color: '#141619',
              }}>
              Quote Tweet
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setModal2(false)}
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              marginTop: RH(2),
              alignItems: 'center',
              borderWidth: 0.5,
              borderRadius: 25,
              justifyContent: 'center',
              borderColor: '#E7ECF0',
              backgroundColor: '#E7ECF0',
            }}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 17,
                fontWeight: '500',
                color: '#141619',
              }}>
              Cancel
            </Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;
