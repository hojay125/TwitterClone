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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {RH, RW} from '../Helper/constants';
import FollowersIcon from '../Components/FollowersIcon';
export const FollowScreen = props => {
  const [active, setActive] = useState('Followers');

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
            oni-of-lagos🫶🖤
          </Text>
        </View>
        <Pressable
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Feather name="user-plus" size={22} color={'black'} />
        </Pressable>
      </View>
      <View
        style={{
          borderBottomWidth: 0.2,
          borderTopWidth: 0.2,
          paddingHorizontal: RW(4),
          borderColor: '#687684',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Pressable
          onPress={() => setActive('Followers')}
          style={{
            paddingVertical: 10,
            borderBottomWidth: active == 'Followers' ? 2 : null,
            borderColor: '#4C9EEB',
          }}>
          <Text
            style={{
              fontSize: 14,
              color: active == 'Followers' ? 'black' : '#687684',
              fontWeight: '700',
            }}>
            Followers
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActive('Following')}
          style={{
            paddingVertical: 10,
            borderBottomWidth: active == 'Following' ? 2 : null,
            borderColor: '#4C9EEB',
          }}>
          <Text
            style={{
              fontSize: 14,
              color: active == 'Following' ? 'black' : '#687684',
              fontWeight: '700',
            }}>
            Following
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActive('Subscriptions')}
          style={{
            paddingVertical: 10,
            borderBottomWidth: active == 'Subscriptions' ? 2 : null,
            borderColor: '#4C9EEB',
          }}>
          <Text
            style={{
              fontSize: 14,
              color: active == 'Subscriptions' ? 'black' : '#687684',
              fontWeight: '700',
            }}>
            Subscriptions
          </Text>
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {active == 'Followers' ? (
          <View>
            <FollowersIcon
              dp={AppIcons.pic16}
              name={'Best of Mr. Beast'}
              handle={'beast_ofmr'}
              bio={
                '🤯 HIGH QUALITY 🥳✈️ FOLLOW US AND GAIN ✈️✌️ 3 videos each day! ✌️ \ninstagram: instagram.com/beast_ofmr 🎵\nTiktok: tiktok.com/@beast_ofmr'
              }
              followBack={true}
              followYou={true}
            />
            <FollowersIcon
              dp={AppIcons.pic12}
              name={'Ayande C C Chibi🌸'}
              handle={'AyandeCrecentia'}
              bio={
                'Photographer |DJ| Content Creator | Influencer| Business Woman & Massage therapist💆‍♀️💆‍♂️🍃 bookings:\nayandecrecentiacharmain@gmail.com'
              }
              followBack={true}
              followYou={true}
            />
            <FollowersIcon
              dp={AppIcons.pic13}
              name={'Cynthia❤️‍🔥🌹💫'}
              handle={'Cynt_lopez'}
              bio={
                'Im just a humble girl with a beautiful heart not ready for any relationship💫'
              }
              following={true}
              followYou={true}
            />
            <FollowersIcon
              dp={AppIcons.pic2}
              name={'Muthama 🇰🇪'}
              handle={'LanclotMuthama'}
              bio={'Dad, Husband, Business partner L%F enterprise'}
              followBack={true}
              followYou={true}
            />
            <FollowersIcon
              dp={AppIcons.pic6}
              name={'Daniell'}
              handle={'viclenteb'}
              bio={'Biochemist, obidient family. labour party'}
              following={true}
              followYou={true}
            />
            <FollowersIcon
              dp={AppIcons.pic8}
              name={'Emeka'}
              handle={'dr_prognosis'}
              bio={
                'OD, MNOA. iDoctor. Messi FC, Obidient FC.\nAdvocate of good governance.Role model, trainer, teacher... Eradicating needless blindness. davidmuoebonam@gmail.com'
              }
              following={true}
              followYou={true}
            />
            <FollowersIcon
              dp={AppIcons.pic9}
              name={'Adedeji'}
              handle={'Dejicrown'}
              bio={
                'A PLUMBER IN BOTH DOMESTIC/INDUSTRIAL PLUMBING, BORHOLE Contact 08030495320'
              }
              following={true}
              followYou={true}
            />
            <FollowersIcon
              dp={AppIcons.pic10}
              name={'Roonies_cakes(Lagos Baker)'}
              handle={'holaronke'}
              bio={
                'I bake all kimnds of celebration cakes. (wedding, birthday, graduation, baby &bridal shower).\nTraining available A baker 🎂🧁🥮🍰'
              }
              following={true}
              followYou={true}
            />
            <View style={{height: RH(10)}}></View>
          </View>
        ) : null}

        {active == 'Following' ? (
          <View>
            <FollowersIcon
              dp={AppIcons.pic13}
              name={'Crazy Clips'}
              handle={'crazyclipsonly'}
              bio={
                'Crazy clips posted daily. Unbelievable viral vodeos & more! Viewer discretion is advised'
              }
              following={true}
              followYou={true}
            />
            <FollowersIcon
              dp={AppIcons.pic11}
              name={'Dr Penking 🇳🇬🇦🇺'}
              handle={'drpenking'}
              bio={
                'CEO @penkingcravings |Founder @carehhumanity| Creative Writer & Novelist|IELTS|Medical Doctor|DNA Paternity Test|For Ads and Promo📧'
              }
              following={true}
              followYou={true}
            />
            <FollowersIcon
              dp={AppIcons.pic4}
              name={'Cynthia❤️‍🔥🌹💫'}
              handle={'Cynt_lopez'}
              bio={
                'Im just a humble girl with a beautiful heart not ready for any relationship💫'
              }
              following={true}
            />
            <FollowersIcon
              dp={AppIcons.pic9}
              name={'STARBOY GUCCI🖤🦉🖤'}
              handle={'GucciStarboi'}
              bio={'WIZKID IS THE GREATEST!!Meme Lover!!Cruise Guy!!FC❤️🦅Dm📩'}
              following={true}
            />
            <FollowersIcon
              dp={AppIcons.pic6}
              name={'Daniell'}
              handle={'viclenteb'}
              bio={'Biochemist, obidient family. labour party'}
              following={true}
              followYou={true}
            />
            <FollowersIcon
              dp={AppIcons.pic11}
              name={'Emeka'}
              handle={'dr_prognosis'}
              bio={
                'OD, MNOA. iDoctor. Messi FC, Obidient FC.\nAdvocate of good governance.Role model, trainer, teacher... Eradicating needless blindness. davidmuoebonam@gmail.com'
              }
              following={true}
              followYou={true}
            />
            <FollowersIcon
              dp={AppIcons.pic9}
              name={'Adedeji'}
              handle={'Dejicrown'}
              bio={
                'A PLUMBER IN BOTH DOMESTIC/INDUSTRIAL PLUMBING, BORHOLE Contact 08030495320'
              }
              following={true}
              followYou={true}
            />
            <FollowersIcon
              dp={AppIcons.pic10}
              name={'Roonies_cakes(Lagos Baker)'}
              handle={'holaronke'}
              bio={
                'I bake all kimnds of celebration cakes. (wedding, birthday, graduation, baby &bridal shower).\nTraining available A baker 🎂🧁🥮🍰'
              }
              following={true}
              followYou={true}
            />
            <View style={{height: RH(10)}}></View>
          </View>
        ) : null}
        {active == 'Subscriptions' ? (
          <View
            style={{
              paddingHorizontal: RW(4),
              justifyContent: 'center',
              marginTop: RH(10),
            }}>
            <Text style={{fontSize: 28, color: 'black'}}>
              You dont have any Subscriptions yet
            </Text>
            <Text style={{fontSize: 13, color: 'black', marginTop: 5}}>
              You will find a list of all your Subscriptions here.
            </Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FollowScreen;
