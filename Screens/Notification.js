import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {AppIcons} from '../Helper/Images';
import Feather from 'react-native-vector-icons/Feather';
import Reply from '../Components/Reply';
import Like from '../Components/Like';
import Follow from '../Components/Follow';
import Retweet from '../Components/Retweet';

export const Notification = props => {
  const navigation = useNavigation();
  const [Active, setActive] = useState('All');

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
            Notifications
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('NotificationSettings')}
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
          height: 40,
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          borderColor: '#BDC5CD',
        }}>
        {Active == 'All' ? (
          <Pressable
            style={{
              width: '33.5%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 2,
              borderColor: '#4C9EEB',
            }}>
            <Text style={{color: '#141619'}}>All</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setActive('All')}
            style={{
              width: '33.5%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#687684'}}>All</Text>
          </Pressable>
        )}
        {Active == 'Verified' ? (
          <Pressable
            style={{
              width: '33.5%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 2,
              borderColor: '#4C9EEB',
            }}>
            <Text style={{color: '#141619'}}>Verified</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setActive('Verified')}
            style={{
              width: '33.5%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#687684'}}>Verified</Text>
          </Pressable>
        )}
        {Active == 'Mentions' ? (
          <Pressable
            style={{
              width: '33.5%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 2,
              borderColor: '#4C9EEB',
            }}>
            <Text style={{color: '#141619'}}>Mentions</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setActive('Mentions')}
            style={{
              width: '33.5%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#687684'}}>Mentions</Text>
          </Pressable>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {Active == 'All' ? (
          <View>
            <Follow dp1={AppIcons.pic3} whoFollow={'Deb Kruger'} />
            <Reply
              dp={AppIcons.pic}
              name={'OLIVIE🌻'}
              handle={'AromaofOlive'}
              time={'09/04/2023'}
              replyTo={'@onii_of_lagos'}
              text={
                'Pere dat is still insisting there is nothing serious btw them .'
              }
            />
            <Like
              text={
                'This is the Alex that was drowning? Someone thats even taller than the pool una funny shaa'
              }
              whoLikes={'Ruben Abati and 2 others'}
              dp1={AppIcons.pic2}
              dp2={AppIcons.pic3}
              dp3={AppIcons.pic9}
            />
            <Follow
              twoFollow={true}
              dp1={AppIcons.pic6}
              dp2={AppIcons.pic7}
              whoFollow={'Big Omoba 🦧 and Adegoke joshua'}
            />
            <Retweet
              dp1={AppIcons.pic8}
              whoRetweet={'Eldee olamide 👽 reposted your reply'}
              text={
                'You will be able to receive Direct Message requests from anyone on Twitter, even if you dont follow them. Learn more'
              }
            />
            <Like
              dp1={AppIcons.pic10}
              whoLikes={'The product guy'}
              text={
                'This is the Alex that was drowning? Someone thats even taller than the pool una funny shaa'
              }
            />
            <Reply
              dp={AppIcons.pic12}
              name={'good things'}
              handle={'goodthi7713'}
              time={'05/03/2023'}
              replyTo={'@AromaofOlive and @onii_of_lagos'}
              text={
                'So if your friend dey corner your babe you goan tell him to stop lol \nDont try that real like if you love your life especialy when that friend knows you are into the girl and still go after her '
              }
            />
          </View>
        ) : null}
        {Active == 'Verified' ? (
          <View>
            <Follow dp1={AppIcons.pic3} whoFollow={'Deb Kruger'} />

            <Like
              text={
                'This is the Alex that was drowning? Someone thats even taller than the pool una funny shaa'
              }
              whoLikes={'Ruben Abati and 2 others'}
              dp1={AppIcons.pic2}
              dp2={AppIcons.pic3}
              dp3={AppIcons.pic9}
            />
            <Follow
              twoFollow={true}
              dp1={AppIcons.pic6}
              dp2={AppIcons.pic7}
              whoFollow={'Big Omoba 🦧 and Adegoke joshua'}
            />
            <Retweet
              dp1={AppIcons.pic8}
              whoRetweet={'Eldee olamide 👽 reposted your reply'}
              text={
                'You will be able to receive Direct Message requests from anyone on Twitter, even if you dont follow them. Learn more'
              }
            />
            <Follow dp1={AppIcons.pic7} whoFollow={'Emeka MUOEBONAM'} />
            <Like
              dp1={AppIcons.pic10}
              whoLikes={'The product guy'}
              text={
                'This is the Alex that was drowning? Someone thats even taller than the pool una funny shaa'
              }
            />
            <Retweet
              dp1={AppIcons.pic6}
              whoRetweet={'Bearded Demz 🦍'}
              text={'The kinda wedding i want'}
            />
            <Like
              dp1={AppIcons.pic11}
              whoLikes={'Khalid'}
              text={'Please follow for fast follow back'}
            />
          </View>
        ) : null}
        {Active == 'Mentions' ? (
          <View>
            <Reply
              dp={AppIcons.pic}
              name={'OLIVIE🌻'}
              handle={'AromaofOlive'}
              time={'09/04/2023'}
              replyTo={'@onii_of_lagos'}
              text={
                'Pere dat is still insisting there is nothing serious btw them .'
              }
            />

            <Reply
              dp={AppIcons.pic12}
              name={'good things'}
              handle={'goodthi7713'}
              time={'05/03/2023'}
              replyTo={'@AromaofOlive and @onii_of_lagos'}
              text={
                'So if your friend dey corner your babe you goan tell him to stop lol \nDont try that real like if you love your life especialy when that friend knows you are into the girl and still go after her '
              }
            />
            <Reply
              dp={AppIcons.pic10}
              name={'The product guy'}
              handle={'lucas_Enii'}
              time={'03/03/2023'}
              replyTo={'@onii_of_lagos'}
              text={'yes oo 😂 .'}
            />
            <Reply
              dp={AppIcons.pic13}
              name={'Til💜💜💜💜'}
              handle={'Tilda_world'}
              time={'26/02/2023'}
              replyTo={'@onii_of_lagos and @symply_kim'}
              text={
                'I think you need to watch the clip again. This time watch with an unbiased mind'
              }
            />
            <Reply
              dp={AppIcons.pic15}
              name={'PERE & YEMI ✊🏿'}
              handle={'MKpang'}
              time={'19/02/2023'}
              replyTo={'@onii_of_lagos and @PereEgbi'}
              text={'Thank you so much 🙏'}
            />
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
