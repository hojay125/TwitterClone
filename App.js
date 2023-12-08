import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './Screens/Splash';
import Pages from './Screens/Pages';
import TweetScreen from './Screens/TweetScreen';
import MessageSettings from './Components/MessageSettings';
import NotificationSettings from './Screens/NotificationSettings';
import NewMessage from './Screens/NewMessage';
import TwitterBlue from './Screens/TwitterBlue';
import List from './Screens/List';
import Spaces from './Screens/Spaces';
import SomeoneTweet from './Screens/SomeoneTweet';
import Profile from './Screens/Profile';
import EditProfile from './Screens/EditProfile';
import FollowScreen from './Screens/FollowScreen';

export const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={null}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Pages" component={Pages} />
        <Stack.Screen name="TweetScreen" component={TweetScreen} />
        <Stack.Screen name="MessageSettings" component={MessageSettings} />
        <Stack.Screen name="NewMessage" component={NewMessage} />
        <Stack.Screen name="TwitterBlue" component={TwitterBlue} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Spaces" component={Spaces} />
        <Stack.Screen name="SomeoneTweet" component={SomeoneTweet} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="FollowScreen" component={FollowScreen} />

        <Stack.Screen
          name="NotificationSettings"
          component={NotificationSettings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
