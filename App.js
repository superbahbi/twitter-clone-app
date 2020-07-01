import React, { useContext } from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { setNavigator } from "./src/navigationRef";

import LandingScreen from "./src/screens/LandingScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AuthScreen from "./src/screens/AuthScreen";
import TweetScreen from "./src/screens/TweetScreen";
import SearchScreen from "./src/screens/SearchScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import MessageScreen from "./src/screens/MessageScreen";
import AddTweetScreen from "./src/screens/AddTweetScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SingleTweetScreen from "./src/screens/SingleTweetScreen";
import SignoutScreen from "./src/screens/SignoutScreen";

import { Feather } from "@expo/vector-icons";

import Drawer from "./src/components/Drawer";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as TweetProvider } from "./src/context/TweetContext";

const DrawerNavigator = createDrawerNavigator(
  {
    Profile: ProfileScreen,
    List: { screen: TweetScreen },
    Topics: { screen: TweetScreen },
    Bookmarks: { screen: TweetScreen },
    Moments: { screen: TweetScreen },
    "Sign Out": SignoutScreen,
  },
  {
    drawerWidth: 300,
    drawerPosition: "left",
    contentComponent: Drawer,
  }
);
const tweetFlow = createStackNavigator({
  Tweet: {
    screen: TweetScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  SingleTweet: {
    screen: SingleTweetScreen,
    navigationOptions: {
      title: "Tweet",
    },
  },
});

const switchNavigator = createSwitchNavigator({
  Auth: AuthScreen,
  AddTweet: AddTweetScreen,

  profileFlow: DrawerNavigator,
  loginFlow: createStackNavigator({
    Landing: LandingScreen,
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    TweetStack: {
      screen: tweetFlow,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false,
        },
        tabBarIcon: <Feather name="home" size={30} color="#636E72" />,
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false,
        },
        tabBarIcon: <Feather name="search" size={30} color="#636E72" />,
      },
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false,
        },
        tabBarIcon: <Feather name="bell" size={30} color="#636E72" />,
      },
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false,
        },
        tabBarIcon: <Feather name="mail" size={30} color="#636E72" />,
      },
    },
  }),
});

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <TweetProvider>
      <AuthProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </TweetProvider>
  );
};
