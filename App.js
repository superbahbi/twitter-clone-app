import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import LandingScreen from "./src/screens/LandingScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AuthScreen from "./src/screens/AuthScreen";
import TweetScreen from "./src/screens/TweetScreen";
import SearchScreen from "./src/screens/SearchScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import MessageScreen from "./src/screens/MessageScreen";
const switchNavigator = createSwitchNavigator({
  // ResolveAuth: AuthScreen,
  loginFlow: createStackNavigator({
    Landing: LandingScreen,
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    Tweet: TweetScreen,
    Search: SearchScreen,
    Notification: NotificationScreen,
    Message: MessageScreen,
  }),
});
const App = createAppContainer(switchNavigator);
export default () => {
  return <App />;
};
