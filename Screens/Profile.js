import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {AppIcons} from '../Helper/Images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RH, RW} from '../Helper/constants';
import Tweets from '../Components/tweets';
import Reply from '../Components/Reply';

export const Profile = props => {
  const navigation = useNavigation();
  const [Splash, setSplash] = useState(true);
  const [active, setActive] = useState('Tweets');
  const [modal, setModal] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <ImageBackground source={AppIcons.image4}>
        <SafeAreaView>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: RW(4),
              paddingBottom: RH(4),
              paddingVertical: RH(2),
            }}>
            <Pressable
              onPress={() => props.navigation.goBack()}
              style={{
                width: '10%',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  backgroundColor: 'black',
                  borderRadius: 50,
                }}>
                <MaterialIcons name="arrow-back" size={22} color={'#ffffff'} />
              </View>
            </Pressable>
            <View
              style={{
                width: '80%',
                justifyContent: 'center',
                alignItems: 'center',
              }}></View>
            <Pressable
              style={{
                width: '10%',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <AntDesign name="search1" size={22} color={'#ffffff'} />
            </Pressable>
          </View>

          <View
            style={{
              width: RW(92),
              flexDirection: 'row',
              paddingHorizontal: RW(4),
              marginBottom: RH(-5),
            }}>
            <Pressable style={{}}>
              <Image
                source={AppIcons.pp}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 50,
                  borderColor: '#FFFFFF',
                  borderWidth: 3,
                }}
              />
            </Pressable>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <TouchableOpacity
        onPress={() => navigation.navigate('EditProfile')}
        style={{
          borderColor: '#687684',
          borderWidth: 1,
          borderRadius: 20,
          height: 30,
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignSelf: 'flex-end',
          marginTop: 10,
          marginHorizontal: RW(3),
        }}>
        <Text style={{fontWeight: '600', color: '#000000'}}>Edit profile</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: RW(4)}}>
          <View style={{marginTop: 5}}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: '#000000'}}>
              oni-of-lagos🫶🖤
            </Text>
            <Text style={{fontSize: 15, fontWeight: '500'}}>onii_of_lagos</Text>
          </View>
          <View style={{marginTop: RH(2)}}>
            <Text style={{fontSize: 15, fontWeight: '500', color: '#000000'}}>
              REACT-NATIVE Developer 👨‍💻 Mobile App old accunt suspended.
              gitLink:{' '}
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: '#4C9EEB',
                }}>
                github.com/hojay125. #FashionModel 🫶💯
              </Text>{' '}
              FC 🦅
            </Text>
          </View>
          <View style={{marginTop: RH(1), flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign name="link" size={13} color={'#687684'} />
              <Text
                style={{
                  fontSize: 13,
                  color: '#4C9EEB',
                  marginLeft: 5,
                }}>
                oni-joshua-portfolio.netlify.app
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <AntDesign name="calendar" size={13} color={'#687684'} />
              <Text
                style={{
                  fontSize: 13,
                  color: '#687684',
                  marginLeft: 5,
                }}>
                Joined january 2023
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: RH(1)}}>
            <Pressable onPress={() => navigation.navigate('FollowScreen')}>
              <Text style={{fontSize: 13, color: '#000000', fontWeight: '500'}}>
                250{' '}
                <Text
                  style={{fontSize: 13, color: '#687684', fontWeight: '500'}}>
                  Following
                </Text>
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  fontSize: 13,
                  color: '#000000',
                  marginLeft: 15,
                  fontWeight: '500',
                }}>
                163{' '}
                <Text
                  style={{fontSize: 13, color: '#687684', fontWeight: '500'}}>
                  Followers
                </Text>
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: RW(4),
            marginTop: 5,
            borderBottomWidth: 0.2,
            borderColor: '#687684',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Pressable
            onPress={() => setActive('Tweets')}
            style={{
              borderBottomWidth: active == 'Tweets' ? 2 : null,
              borderColor: '#4C9EEB',
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 15, fontWeight: '600', color: '#687684'}}>
              Tweets
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setActive('Replies')}
            style={{
              borderBottomWidth: active == 'Replies' ? 2 : null,
              borderColor: '#4C9EEB',
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 15, fontWeight: '600', color: '#687684'}}>
              Replies
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setActive('Highlights')}
            style={{
              borderBottomWidth: active == 'Highlights' ? 2 : null,
              borderColor: '#4C9EEB',
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 15, fontWeight: '600', color: '#687684'}}>
              Highlights
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setActive('Media')}
            style={{
              borderBottomWidth: active == 'Media' ? 2 : null,
              borderColor: '#4C9EEB',
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 15, fontWeight: '600', color: '#687684'}}>
              Media
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setActive('Likes')}
            style={{
              borderBottomWidth: active == 'Likes' ? 2 : null,
              borderColor: '#4C9EEB',
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 15, fontWeight: '600', color: '#687684'}}>
              Likes
            </Text>
          </Pressable>
        </View>

        <View style={{paddingHorizontal: RW(4)}}>
          {active == 'Tweets' ? (
            <View>
              <Tweets
                pinned={true}
                dp={AppIcons.pp}
                name={'oni-of-lagos🫶🖤'}
                handle={'onii_of.'}
                time={'03/05/2023'}
                message={
                  'Maybe not today \nMaybe not tomorrow\nBut definately someday i will own my own product in this Tech🙏🙇‍♂️'
                }
                comments={'13'}
                retweets={'32'}
                likes={'435'}
                impression={'987'}
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
                retweet={true}
                onPress={() => navigation.navigate('SomeoneTweet')}
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
                retweet={true}
                dp={AppIcons.pic14}
                name={'Wildin'}
                handle={'Osequiste'}
                time={'6h'}
                message={
                  'But how do pere fans do it? 😂😂 Omo! Taken their guy to the finals twice all amidst slander, hate and vile labels. He really has core fans who love him regardless of all the narratives.'
                }
                comments={'13'}
                retweets={'32'}
                likes={'435'}
                impression={'987'}
              />
              <View style={{height: RH(10)}}></View>
            </View>
          ) : null}

          {active == 'Replies' ? (
            <View>
              <Tweets
                pinned={true}
                dp={AppIcons.pp}
                name={'oni-of-lagos🫶🖤'}
                handle={'onii_of.'}
                time={'03/05/2023'}
                message={
                  'Maybe not today \nMaybe not tomorrow\nBut definately someday i will own my own product in this Tech🙏🙇‍♂️'
                }
                comments={'13'}
                retweets={'32'}
                likes={'435'}
                impression={'987'}
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
                retweet={true}
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
                reply={true}
                dp={AppIcons.pp}
                name={'oni-of-lagos🫶🖤'}
                handle={'onii_of.'}
                time={'11h'}
                message={'Shaa no use enjoyment kill yourself omo werey'}
                comments={''}
                retweets={'2'}
                likes={'11'}
                impression={'97'}
              />
              <Tweets
                retweet={true}
                dp={AppIcons.pic14}
                name={'Wildin'}
                handle={'Osequiste'}
                time={'6h'}
                message={
                  'But how do pere fans do it? 😂😂 Omo! Taken their guy to the finals twice all amidst slander, hate and vile labels. He really has core fans who love him regardless of all the narratives.'
                }
                comments={'13'}
                retweets={'32'}
                likes={'435'}
                impression={'987'}
              />
              <View style={{height: RH(10)}}></View>
            </View>
          ) : null}

          {active == 'Highlights' ? (
            <View>
              <Text style={{marginTop: RH(5), fontSize: 27, color: '#000000'}}>
                Verified only
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#000000',
                  fontWeight: '600',
                  marginTop: 10,
                }}>
                You must be verified to highlight posts on your profile.
              </Text>
              <Pressable
                style={{
                  backgroundColor: '#000000',
                  paddingVertical: 15,
                  marginTop: RH(3),
                  borderRadius: 25,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                  }}>
                  Subscribe today
                </Text>
              </Pressable>
              <View style={{height: RH(10)}}></View>
            </View>
          ) : null}

          {active == 'Media' ? (
            <View>
              <Tweets
                dp={AppIcons.pp}
                name={'oni-of-lagos🫶🖤'}
                handle={'onii_of.'}
                time={'18/09/2023'}
                message={
                  'My Badagry people lets do this for our beloved brother ✊🏿💡'
                }
                image={true}
                imageUpload={AppIcons.moh}
                comments={'2'}
                retweets={'9'}
                likes={'28'}
                impression={'543'}
              />

              <Tweets
                onPressRetweet={() => setModal2(true)}
                dp={AppIcons.pp}
                name={'oni-of-lagos🫶🖤'}
                handle={'onii_of.'}
                time={'03/09/2023'}
                image={true}
                imageUpload={AppIcons.me}
                comments={'1'}
                retweets={'6'}
                likes={'23'}
                impression={'481'}
              />
              <Tweets
                onPressRetweet={() => setModal2(true)}
                dp={AppIcons.pp}
                name={'oni-of-lagos🫶🖤'}
                handle={'onii_of.'}
                time={'21/08/2023'}
                image={true}
                message={
                  'Brand New Open Box with Disk 470k✅🔌 \n #BigBrotherNaija'
                }
                imageUpload={AppIcons.pes}
                comments={'1'}
                retweets={'6'}
                likes={'23'}
                impression={'481'}
              />
              <Tweets
                onPressRetweet={() => setModal2(true)}
                dp={AppIcons.pp}
                name={'oni-of-lagos🫶🖤'}
                handle={'onii_of.'}
                time={'16/07/2023'}
                message={'Fish in the water 💦'}
                image={true}
                imageUpload={AppIcons.otes}
                comments={'924'}
                retweets={'1,241'}
                likes={'2,471'}
                impression={'2.9M'}
              />

              <View style={{height: RH(10)}}></View>
            </View>
          ) : null}

          {active == 'Likes' ? (
            <View>
              <Tweets
                dp={AppIcons.pic15}
                name={'OLIVE🌻'}
                handle={'AromaofOlive.'}
                time={'2h'}
                message={
                  'Mercy: If i give you that thing you cant finish it.\nPere: What thing?\nMercy: Myself.\nPere: Why would i want to finish it when theres forever?\n \n Hey God!! 😩😩🥰🥰🥰🥰🥰🥰'
                }
                comments={''}
                retweets={'2'}
                likes={'11'}
                impression={'97'}
              />
              <Reply
                dp={AppIcons.pic13}
                name={'MBAH'}
                handle={'Mbahdeyforyou.'}
                time={'2h'}
                replyTo={'@honest30bgfan'}
                text={
                  'So many things dey go down inside no be just that yesterday own'
                }
                comments={''}
                retweets={'2'}
                likes={'11'}
                impression={'97'}
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
                retweet={true}
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
                reply={true}
                dp={AppIcons.pp}
                name={'oni-of-lagos🫶🖤'}
                handle={'onii_of.'}
                time={'11h'}
                message={'Shaa no use enjoyment kill yourself omo werey'}
                comments={''}
                retweets={'2'}
                likes={'11'}
                impression={'97'}
              />
              <Tweets
                retweet={true}
                dp={AppIcons.pic14}
                name={'Wildin'}
                handle={'Osequiste'}
                time={'6h'}
                message={
                  'But how do pere fans do it? 😂😂 Omo! Taken their guy to the finals twice all amidst slander, hate and vile labels. He really has core fans who love him regardless of all the narratives.'
                }
                comments={'13'}
                retweets={'32'}
                likes={'435'}
                impression={'987'}
              />
              <View style={{height: RH(10)}}></View>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
