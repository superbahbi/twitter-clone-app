import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
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

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as TweetProvider } from "./src/context/TweetContext";

const switchNavigator = createSwitchNavigator({
  Auth: AuthScreen,
  AddTweet: AddTweetScreen,
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
