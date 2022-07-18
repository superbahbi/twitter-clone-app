import React, { useRef, useEffect, useState } from "react";

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
import ContactScreen from "./src/screens/ContactScreen";
import ChatScreen from "./src/screens/ChatScreen";
import AddTweetScreen from "./src/screens/AddTweetScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SingleTweetScreen from "./src/screens/SingleTweetScreen";
import SignoutScreen from "./src/screens/SignoutScreen";

import { Feather } from "@expo/vector-icons";

import Drawer from "./src/components/Drawer";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as TweetProvider } from "./src/context/TweetContext";
import { Provider as MessageProvider } from "./src/context/MessageContext";
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
const messageFlow = createStackNavigator({
  Message: {
    screen: MessageScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Contact: {
    screen: ContactScreen,
    navigationOptions: {
      title: "New message",
    },
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: { headerShown: true },
  },
});

const BottomTabNavigator = createBottomTabNavigator({
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
    screen: messageFlow,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
      },
      tabBarIcon: <Feather name="mail" size={30} color="#636E72" />,
    },
  },
});
const DrawerNavigator = createDrawerNavigator(
  {
    Home: BottomTabNavigator,
    Profile: { screen: ProfileScreen },
    List: { screen: TweetScreen },
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
const switchNavigator = createSwitchNavigator({
  Auth: AuthScreen,
  AddTweet: AddTweetScreen,

  // profileFlow: DrawerNavigator,
  loginFlow: createStackNavigator({
    Landing: LandingScreen,
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: DrawerNavigator,
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <MessageProvider>
      <TweetProvider>
        <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </TweetProvider>
    </MessageProvider>
  );
};
